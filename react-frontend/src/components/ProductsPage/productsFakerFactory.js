
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
productID: faker.date.past("8"),
productDescription: faker.date.past(""),
productQty: faker.date.past(""),
createdBy: faker.date.past(""),
createdDate: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
