import request, { gql } from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clmfp5wi70qnp01t66jacarwz/master"

export const getCarsList = async () => {
    const query = gql`
        query CarLists {
            carLists {
                carAvg
                createdAt
                id
                name
                price
                publishedAt
                updatedAt
                carType
                carBrand
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export const createBooking = async (formValue: any) => {
    const mutationQuery = gql`
    mutation MyMutation {
        createBooking(
            data:  { 
            pickUpDate: "`+ formValue.pickUpDate + `", 
            pickUpTime: "`+ formValue.pickUpTime + `", 
            dropOffDate: "`+ formValue.dropOffDate + `", 
            dropOffTime: "`+ formValue.dropOffTime + `", 
            contactNumber: "`+ formValue.contactNumber + `", 
            carId: {connect: {id: "`+ formValue.carId + `"}}}
        ) {
            id
        }
    }
    
    `

    const result = await request(MASTER_URL, mutationQuery);
    return result;
}