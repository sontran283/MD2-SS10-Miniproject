import React from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { formatMoney } from '../common/format';
import { act_decrease, act_delete, act_increase } from '../actions/cartActions';


export default function Cart() {
    //  lay du lieu tu store ve
    const listCart = useSelector((cart) => cart.listCart)
    const dispatch = useDispatch()

    //  tinh tong tien cua cac sp trong gio hang
    const totalPrice = listCart.reduce((prev, curent) => {
        return prev + curent.price * curent.quantity
        // so luong nhan don gia
    }, 0)


    // ham tang so luong
    const handleDecrease = (product_id) => {
        dispatch(act_decrease(product_id))
    }

    //  ham giam so luong
    const handleIncrease = (product_id) => {
        dispatch(act_increase(product_id))
    }

    const handleDelete = (product_id) => {
        dispatch(act_delete(product_id))
    }


    return (
        <div>
            <Navbar />
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            </div>

                            {
                                listCart.map((cart) => (

                                    <div className="card rounded-3 mb-4" key={cart.product_id}>
                                        <div className="card-body p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img
                                                        src={cart.image}
                                                        className="img-fluid rounded-3"
                                                        alt="Cotton T-shirt"
                                                    />
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <p className="lead fw-normal mb-2">{cart.product_name}</p>

                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                                                    <button
                                                        className="btn btn-link px-2"
                                                        onClick={() => handleDecrease(cart.product_id)}
                                                    >
                                                        <i className="fas fa-minus" />
                                                    </button>

                                                    <div className='px-2'>{cart.quantity}</div>

                                                    <button
                                                        className="btn btn-link px-2"
                                                        onClick={() => handleIncrease(cart.product_id)}
                                                    >
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 className="mb-0">{formatMoney(cart.price)}</h5>
                                                </div>
                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a href="#!"
                                                        onClick={() => handleDelete(cart.product_id)}
                                                        className="text-danger">
                                                        <i className="fas fa-trash fa-lg" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="card mb-4">
                                <div className="card-body p-4 d-flex flex-row align-items-center">
                                    <div className="form-outline flex-fill ">
                                        <label className="form-label" htmlFor="form1" style={{ color: "red" }}>
                                            Tổng tiền:  {formatMoney(totalPrice)}
                                        </label>
                                    </div>
                                    <button className='btn btn-primary'>Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />

        </div >
    )
}
