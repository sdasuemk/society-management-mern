import React from "react";
// import { GetServerSideProps } from "next";
import { userOwnSocietyInformation } from "../../services/apis/services";
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlinePhoneIphone, MdEmail } from "react-icons/md";
import { FaFaceGrin } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const iconSize: number = 15;

const UserOwnSociety: React.FC = async () => {
  let userOwnSociety;
  let societyMembers;
  let adminInformation;
  let additionalDetails;
  try {
    ({
      data: {
        userOwnSociety,
        societyMembers,
        adminInformation,
        additionalDetails,
      },
    } = await userOwnSocietyInformation({}));
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }

  console.log(adminInformation);
  if (!userOwnSociety) {
    return <div>No society information available</div>;
  }

  return (
    <main>
      <section className="buttons"></section>
      <section className="society">
        <section className="w-full p-3" id="society-address">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-extrabold border-b-2 pb-2">
                {userOwnSociety.name}
              </CardTitle>
              <CardDescription>{userOwnSociety.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <section className="grid grid-cols-4 gap-4">
                <section
                  className="flex flex-col p-2 gap-2"
                  id="society-details"
                >
                  <div className="flex p-1 gap-2">
                    <p className="font-semibold">Additional Details</p>
                  </div>
                  <p>Number of towers: {additionalDetails.numberOftowers}</p>
                  <p>Number of flats: {additionalDetails.numberOfFlats}</p>
                  <div>
                  <p>Amenities:</p>
                  <ul>
                    {additionalDetails.amenities.map((member: string, index: number) => (
                      <li key={index} className="flex flex-row ml-4">
                        {member}
                      </li>
                    ))}
                  </ul>
                  </div>
                </section>
                <section
                  className="flex flex-col p-2 gap-2"
                  id="society-details"
                >
                  <div className="flex p-1 gap-2">
                    <p className="font-semibold">Admin Information</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <FaFaceGrin size={iconSize} className="ml-1 mt-1" />
                    <p className="">{`${adminInformation.name}`}</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <MdOutlinePhoneIphone size={iconSize} className="ml-1 mt-1" />
                    <p>{adminInformation.phone}</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <MdEmail size={iconSize} className="ml-1 mt-1" />
                    <p className="text-sm">{adminInformation.email}</p>
                  </div>
                </section>

                <section
                  className="flex flex-col p-2 gap-2"
                  id="society-members"
                >
                  <div className="flex p-1 gap-2">
                    <p className="font-semibold">Society Members:</p>
                  </div>
                  <ul>
                    {societyMembers.map((member: string, index: number) => (
                      <li key={index} className="flex flex-row">
                        <FaFaceGrin size={iconSize} className="pt-2" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </section>
                <section
                  className="flex flex-col p-2 gap-2"
                  id="society-contact"
                >
                  <div className="flex p-1 gap-2">
                    <p className="font-semibold">Contact Information:</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <FaAddressCard size={iconSize} className="ml-1 mt-1" />
                    <p className="">{`${userOwnSociety.address.plotNo}, ${userOwnSociety.address.street}, ${userOwnSociety.address.city}, ${userOwnSociety.address.state}, ${userOwnSociety.address.pinCode}, ${userOwnSociety.address.landMark}`}</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <MdOutlinePhoneIphone size={iconSize} className="ml-1 mt-1" />
                    <p>{userOwnSociety.phone}</p>
                  </div>
                  <div className="flex p-1 gap-2">
                    <MdEmail size={iconSize} className="ml-1 mt-1" />
                    <p>{userOwnSociety.email}</p>
                  </div>
                </section>
                <section className="col-span-4">
                  {/* Add any additional sections or details here */}
                </section>
              </section>
            </CardContent>
            <CardFooter className="flex flex-cols">
              <div className="">
              <div className="">
              <p>{userOwnSociety.additionalDetails}</p>
              </div>
              
                <div className="grid grid-cols-7 gap-3 pt-2">
                    <Button>
                      Manage Admin
                    </Button>
                    <Button>
                      Manage Members
                    </Button>
                    <Button>
                      Manage Amenities
                    </Button>
                    <Button>
                      Manage Contact
                    </Button>
                    <Button>
                      Manage Tower
                    </Button>
                    </div>
                    </div>
            </CardFooter>
            
          </Card>
        </section>
      </section>
    </main>
  );
};

export default UserOwnSociety;
