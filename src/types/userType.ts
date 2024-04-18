export type UserType = {
  firstName: {
    type: String;
    required: true;
  };
  lastName: {
    type: String;
    required: true;
  };
  email: {
    type: String;
    required: true;
  };
  password: {
    type: String;
    required: true;
  };
};

export type CarDetailsType = {
  vatType: { type: String; required: true };
  year: { type: number; required: true };
  location: { type: String; required: true };
  address: { type: String; required: true };
  mileage: { type: String; required: true };
  fuelType: { type: String; required: true };
  power: { type: String; required: true };
  condition: { type: String; required: true };
  color: { type: String; required: true };
  intColor: { type: String; required: true };
};
