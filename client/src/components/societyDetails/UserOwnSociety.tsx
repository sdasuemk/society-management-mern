import React from "react";

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
        <section className="" id="society-address">
          <Card>
            <CardHeader>
              <CardTitle className="font-extrabold">ABC Society</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
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
