const BookingsRouter = require('express').Router();
const BookingModel = require('../Models/Bookings.model');


BookingsRouter.get('/',(req,res,next) => {
    BookingModel.find()
    .then(response => {
        if(response && response.length > 0){
            return res.status(200).json({
                result : response,
                success : true,
                message : "Hall Booked"
            })
        }
        else{
            return res.status(200).json({
                result : [],
                success : true,
                message : "No Bookings found!!!"
            })
        }
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Error fetching Booking Details",
            Error : err
        })
    })
})


BookingsRouter.post('/createBooking', (req,res,next) => {
    const data = req.body;
    const NewBooking = new BookingModel(data);
    NewBooking.save()
    .then(response => {
        return res.status(200).json({
            result : response,
            success : true,
            message : "Hall Booked Succesfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Booking Failed",
            Error : err
        })
    })
})

BookingsRouter.get('/bookedHall', (req,res,next) => {
    BookingModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.status === "Confirmed");
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "These are the confirmed Bookings"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Error fetching Booked Halls",
            Error : err
        })
    })
})


BookingsRouter.get('/:name', (req,res,next) => {
    const {name} = req.params;
    BookingModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.customerName == name);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "Customer Found"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Customer not Found",
            Error : err
        })
    })
})

module.exports = BookingsRouter;