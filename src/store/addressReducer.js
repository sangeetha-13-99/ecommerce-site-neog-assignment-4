import { v4 as uuid } from "uuid";


export const addressReducerFunction=(state,action)=>{
    switch (action.type){
        case "ADDNEWADDRESS":
            //  user id data
            const newAddressData={_id:uuid(),...action.payload.addressData};
            let found=false;
            const addAddress=state.usersAddress.map((user)=>{
                if(user.userId===action.payload.userId){
                    found=true;
                    return {...user,address:[...user.address,newAddressData]};
                }
                return user;
            })
            if(found===false){
                return {...state,usersAddress:[...state.usersAddress,{userId:action.payload.userId,address:[newAddressData]}]};
            }
            return {...state,usersAddress:addAddress};
             // user id, address id 
        case "DELETEADDRESS":
            const deleteAddress=state.usersAddress.map((user)=>{
                if(user.userId===action.payload.userId){
                    const modifiedDeleteaddress=user.address.filter((address)=>address._id!==action.payload.addressId)
                    return {...user,address:modifiedDeleteaddress};
                }
                return user;
            });
            if(state.currentAddress._id===action.payload.addressId){
                return {...state,currentAddress:{},usersAddress:deleteAddress};
            }
            return {...state,usersAddress:deleteAddress};
            // user id, address id, data
        case "UPDATEADDRESS":
            const updateAddress=state.usersAddress.map((user)=>{
                if(user.userId===action.payload.userId){
                    const modifiedUpdatedAddress=user.address.map((address)=>{
                        if(address._id===action.payload.addressId){
                            return action.payload.addressData;
                        }
                        return address;
                    });
                    return {...user,address:modifiedUpdatedAddress};
                }
                return user;
            });
            if(state.currentAddress._id===action.payload.addressId){
                return {...state,currentAddress:action.payload.addressData,usersAddress:updateAddress};
            }
            return {...state,usersAddress:updateAddress};
        case 'SETEDITSTATE':
            return {...state,editAddress:{isEdit:action.payload.isEdit,addressId:action.payload.addressId,userId:action.payload.userId,formData:action.payload.formData}}
        case 'SETCURRENTADDRESS':
            return {...state,currentAddress:action.payload.currentAddress}
        default:
            break;
    }
}

export const initialAddressData={
    usersAddress:[{
        userId:"52fe1a9b-31b2-4c16-ba9e-17b807f18fab",
        address:[
            {
                _id :"118b0e9c-f329-4f96-9670-1ebb3051309f",
                phone:"9876543210",
                street:"00-101/1 adarsh Balika colony",
                pincode:"000000",
                city:"Hyderabad",
                state:"Telangana",
                country:"India",
                addressType:"Home",
            }
        ]
    },],
    dummyData:{
        name:"Min Yonngi",
        phone:"1234567890",
        street:"UN Village",
        pincode:"000000",
        city:"Seoul city",
        state:"Seoul",
        country:"South korea",
        addressType:"Home"
    },
    editAddress:{isEdit:false,userId:'',addressId:'',formData:{}},
    currentAddress:{}
}

