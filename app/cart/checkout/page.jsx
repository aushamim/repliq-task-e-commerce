"use client";
import CartIndicator from "@/app/Components/CartIndicator/CartIndicator";
import CustomInput from "@/app/Components/CustomInputFields/CustomInput";
import { useCartStore, useOrderStore, useUserStore } from "@/app/Hooks/store";
import { orderSchema } from "@/app/Schemas/inputValidation";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const loggedInUserData = useUserStore((state) =>
    state.users.find((user) => user.phone === loggedInUser.phone)
  );
  const placeOrder = useOrderStore((state) => state.placeOrder);

  const submitForm = (values, actions) => {
    console.log(values);

    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    toast.promise(promise, {
      loading: "Placing Order",
      success: () => {
        placeOrder(loggedInUser, cart, totalPrice, values);
        clearCart();
        actions.resetForm();
        router.push("/cart/order-complete");
        return "Order placed successfully";
      },
      error: "Failed to place order",
    });
  };

  return (
    <div className="mt-10 min-h-[80vh]">
      <CartIndicator page="checkout" />

      {loggedInUser ? (
        <>
          {cart?.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 xl:grid-cols-3 gap-10 p-5 xl:p-0">
              <div className="xl:col-span-2">
                <h3 className="text-lg font-semibold">Billing Details</h3>
                <div className="mt-3">
                  <Formik
                    initialValues={{
                      name: loggedInUserData ? loggedInUserData.name : "",
                      email: loggedInUserData ? loggedInUserData.email : "",
                      address: loggedInUserData ? loggedInUserData.address : "",
                      phone: loggedInUserData ? loggedInUserData.phone : "",
                      notes: "",
                    }}
                    validationSchema={orderSchema}
                    onSubmit={submitForm}
                  >
                    {(props) => (
                      <Form>
                        <CustomInput
                          label="Name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                        <CustomInput
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                        <CustomInput
                          phone={true}
                          label="Phone"
                          name="phone"
                          type="text"
                          placeholder="Enter your phone no."
                        />
                        <CustomInput
                          label="Address"
                          name="address"
                          type="text"
                          placeholder="Enter your address"
                        />
                        <CustomInput
                          label="Notes"
                          name="notes"
                          type="text"
                          placeholder="Order notes (optional)"
                        />

                        <div className="mt-5 hidden">
                          <button
                            type="submit"
                            className="btn w-full"
                            disabled={props.isSubmitting}
                            id="checkout-button"
                          >
                            checkout
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <div className="mt-5 border-y py-3">
                  {cart?.map((cart_item) => (
                    <div
                      key={cart_item?.product?.id}
                      className="grid grid-cols-5 py-1"
                    >
                      <p className="col-span-3">{cart_item?.product?.name}</p>
                      <p className="text-center">x {cart_item?.quantity}</p>
                      <p className="text-end">
                        $
                        {(
                          (cart_item?.product?.price -
                            (cart_item?.product?.price *
                              cart_item?.product?.discount) /
                              100) *
                          cart_item?.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="py-3">
                  <div className="grid grid-cols-2 py-2 font-semibold">
                    <p>Subtotal</p>
                    <p className="text-end">${totalPrice}</p>
                  </div>
                  <div className="grid grid-cols-2 py-2 font-semibold">
                    <p>Shipping</p>
                    <p className="text-end">Free</p>
                  </div>
                  <div className="grid grid-cols-2 py-2 font-semibold">
                    <p>Total</p>
                    <p className="text-end">${totalPrice}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-success w-full uppercase text-white tracking-wide"
                    onClick={() => {
                      document.getElementById("checkout-button").click();
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-10">
              <img
                className="w-16 mx-auto"
                src="/assets/images/food.png"
                alt="no foods"
              />
              <p className="text-center mt-2">No product in the cart</p>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="text-2xl xl:text-5xl font-semibold text-center mt-16">
            Please{" "}
            <Link
              href="/user/login"
              className="text-orange-500 hover:text-orange-600 duration-300"
            >
              Login/Register
            </Link>{" "}
            to continue
          </h1>
        </>
      )}
    </div>
  );
};

export default Checkout;
