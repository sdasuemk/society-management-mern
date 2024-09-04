// Define the structure of each mock response
interface MockResponse {
    data: any; // Adjust this type based on your actual data structure
  }
  
  // Define the structure of the mocks object
  interface Mocks {
    [key: string]: MockResponse;
  }
  
  // Example of how the mocks data might be structured
  const mocks: Mocks = {
    "v1/auth/signup": {
      data: { message: "User signed up successfully", userId: 1 },
    },
    "v1/auth/signout": {
      data: { message: "User signed out successfully" },
    },
    "v1/auth/signin": {
      data: { message: "User signed in successfully", token: "abc123" },
    },
    "v1/society/information": {
      data: {
        userOwnSociety: {
          name: "Calcutta Heights",
          address: {
            plotNo: "45C",
            street: "Park Street",
            city: "Kolkata",
            state: "West Bengal",
            pinCode: "700016",
            landMark: "Near The Park Hotel",
          },
          phone: "+91-987-654-3210",
          email: "info@calcuttaheights.com",
          description:
            "Calcutta Heights offers a blend of modern amenities and classic charm, situated in a prime location with easy access to cultural landmarks.",
          additionalDetails:
            "Located in the heart of Kolkata, close to major shopping districts and cultural spots.",
          amenities: [
            "Swimming Pool",
            "Gym",
            "Community Hall",
            "Children's Play Area",
            "Rooftop Garden",
          ],
        },
        societyMembers: [
          "Sourav Chatterjee",
          "Moumita Dey",
          "Arindam Roy",
          "Pallavi Ghosh",
          "Rohit Saha",
          "Ananya Das",
          "Kunal Banerjee",
          "Rina Mukherjee",
        ],
        adminInformation: {
          name: "Amitava Bhattacharya",
          phone: "+91-983-456-7890",
          email: "amitava.bhattacharya@calcuttaheights.com",
        },
        additionalDetails: {
          numberOftowers: "5",
          numberOfFlats: "300",
          amenities: [
            "Swimming Pool",
            "Gym",
            "Community Hall",
            "Children's Play Area",
            "Rooftop Garden",
            "Library",
            "Tennis Court",
          ],
        },
      },
    },
    // Add more mock responses as needed
  };
  
  export default mocks;
  