import React from "react";

function Post({el}) {
    const categories = {
        Food: "Продукты",
        Clothers: "Одежда",
        Furniture: "Мебель",
    }
    return (
        <>
            <main id="main">
                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="breadcrumb-hero">
                        <div className="container">
                            <div className="breadcrumb-hero">
                                <h2>Об этом продукте</h2>
                                <p>Подробное описание продукта</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <ol>
                            <li><a href="/good">Назад</a></li>
                            <li>Добро</li>
                        </ol>
                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-11">
                                <div className="row justify-content-end">
                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box py-5">
                                            <i className="bi bi-calendar-check"></i>
                                            {/*<span>{el.date.slice(0, 10)}</span>*/}
                                            <p>Опубликовано</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box py-5">
                                            <i className="bi bi-calendar-x"></i>
                                            {/*<span>{el.available}</span>*/}
                                            <p>Действительно до</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            <i className="bi bi-basket"></i>
                                            {/*<span data-purecounter-start="0" data-purecounter-end={curProduct.quantity} className="purecounter">{curProduct.quantity}</span>*/}
                                            {/*<p>Количество</p>*/}
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            <i className="bi bi-tags"></i>
                                            {/*<span>{categories[el.category_id]}</span>*/}
                                            <p>Категория</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 video-box align-self-baseline position-relative">
                                {/*<img src={el.img} className="img-fluid" alt="" />*/}
                            </div>

                            <div className="col-lg-6 pt-3 pt-lg-0 content">
                                {/*<h3>{el.title}</h3>*/}
                                <p>Детали продукта:</p>
                                <ul>
                                    <li>
                                        <i className="bx bx-check-double"></i>{" "}
                                        {/*{el.geolocatcion}*/}
                                    </li>
                                    <li>
                                        <i className="bx bx-check-double"></i>{" "}
                                        {/*{el.description}*/}
                                    </li>
                                    <li>
                                        <i className="bx bx-check-double"></i> Готов встретиться по
                                        указанному адресу с 10:00 до 18:00
                                    </li>
                                </ul>
                                <p className="fst-italic">
                                    Обращайте внимание на состояние вещей и сроки годности продуктов, будьте вежливы
                                    с автором публикации
                                </p>
                                {/* <button href="#about" className="btnauthor">Снять с публикации</button> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End About Section --> */}
            </main>
        </>
    )
}
export default Post