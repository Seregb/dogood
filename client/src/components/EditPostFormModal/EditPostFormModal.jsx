import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import './styleFormModal.css'
import {ProfileThunk} from "../../redux/thunk/ThunkPosts";


const MODAL_STYLES = {
    position: 'fixed',
    width: "35%",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const BUTTON_CLOUSE_STYLES = {
    position: 'fixed',
    top: 0,
    right: 0,
    border: 'none',
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, .0)',

}


const EditFoodFormModal = ({ open, children, onClose, post, setProfile }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({ name: post?.name, description: post?.description, geolocation: post?.geolocation, img: post?.img })
    const [checkbtnphoto, setCheckbtnphoto] = useState(true)
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    // const handleSubmit = async (e) => {
    //     console.log(post.id, '<<<<<<<=');
    //     e.preventDefault()
    //     let { name, description, img } = inputs
    //     let resp = await fetch('/items', {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         credentials: "include",
    //         body: JSON.stringify(inputs)
    //     })
    //     if (resp.status === 200)
    //         await dispatch(ProfileThunk())
    //     await onClose()
    // }


    if (!open) return null

    return ReactDom.createPortal(
            <>
            <div className="main-div main-w3layouts wrapper" style={OVERLAY_STYLES} />
            <div className="two-div main-agileinfo" style={MODAL_STYLES}>

                <div className="agileits-top formdesign">

                    {children}
                    <form className="">
                        <button onClick={onClose} style={BUTTON_CLOUSE_STYLES} ><i className="bi bi-x"></i></button>

                        <input className="text inputformdecor" type="text" name="title" placeholder="Название" required="" value={inputs?.title} />
                        <input className="text email inputformdecor" type="text" name="description" placeholder="Описание" required="" value={inputs?.description onChange={}}  />
                        {/*<input className="text email inputformdecor" type="text" name="geolocation" placeholder="Адрес" required="" value={inputs?.geolocation}  />*/}
                        {/* <input onChange={(e) => inputAvatarHandler(e)} accept='image/*' type='file' hidden name='photo' /> */}
                        {/* <input className="text email inputformdecor" type="date" name="validUntil" placeholder="Действительно до" required="" value={inputs.validUntil} onChange={handleChange} /> */}
                        {/* <FileBase
                className="text email inputformdecor inputphoto input-file"
                id="file"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setInputs({ ...inputs, photo: base64 })}
                onDone={() => setCheckbtnphoto(false)}

              />
              <label for="file" className="btn btn-tertiary js-labelFile">
                {checkbtnphoto ? <i className="icon fa fa-check"></i> : <i className="bi bi-check2-square"></i>}

                <span className="js-fileName">{checkbtnphoto ?" Обновить фото" :" Фото загружено"}</span>
              </label> */}
                        <button onClick={handleSubmit} className="btnlogin"> Сохранить изменения</button>
                        <div className="wthree-text">
                            <div className="clear"> </div>
                        </div>
                    </form>
                    <p>Вы передумали? <Link onClick={onClose} to="/profile"> Выйти</Link></p>
                    <div>
                    </div>
                </div>

                <ul className="colorlib-bubbles">
                    <li><img className="img-bubbles" src="../../../assets/img/eggplant.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/pineapple.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/strawberry.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/apple.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/bananas.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/bell-pepper.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/broccoli.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/carrot.svg" /></li>
                    <li><img className="img-bubbles" src="../../../assets/img/fruit.svg" /></li>
                </ul>
            </div>
        </>,
        document.getElementById('portal')
    );

}
export default EditFoodFormModal

