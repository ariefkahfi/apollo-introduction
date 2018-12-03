module.exports = {
    Car:{
        carOwner(carObj,_, ctx,__){
            const {carId} = carObj
            const result =
                ctx.data.filter(v=>{
                    return v.carOwner.carId === carId
                })
            return result[0].carOwner
        }
    },
    Query:{
        allCar(_,__,ctx,___){
            return ctx.data
        }
    },
    Mutation:{
        addCar(_, {carInput} , ctx , __){
            ctx.data.push(carInput)
            return carInput
        }
    }
}