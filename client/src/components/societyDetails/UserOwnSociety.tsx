import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const UserOwnSociety = () => {
  return (
    <main>
      <section className="buttons"></section>
      <section className="society">
        {/* <section className="" id="society-name">
          <div className="" id="society-name">
            <h1 className="text-2xl font-extrabold" id="society-name">
              ABC Society
            </h1>
          </div>
        </section> */}
        <section className="w-full p-3" id="society-address">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-extrabold border-b-2 pb-2">ABC Society</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <section className="">
                <section className="society__address">
                    <p><FaAddressCard /> </p>
                    <p><MdOutlinePhoneIphone /> </p>
                    <p><MdEmail /></p>

                </section>
              </section>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </section>
        <section className="" id="society-contact"></section>
        <section className="" id="society-description-form-optional"></section>
        <section
          className=""
          id="society-aditional-details-form-optional"
        ></section>
        <section className="" id="society-amenities-form-optional"></section>
      </section>
    </main>
  );
};

export default UserOwnSociety;
