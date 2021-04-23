import chicaMobile from "../assets/mask-group.png";
import chicaI from "../assets/chica.svg";

export function LeftSide() {

  return (
    <>

        <div className="col-12 col-sm-12 col-md-5 aside-left-mobile">

            <div className="row">

                <div className="col-8">

                    <div className="aside-left-mobile__cajon-texto">

                        <div className="aside-left-mobile__text1">!Nuevo¡</div>
                        <div className="aside-left-mobile__text2">Seguro Vehicular</div>
                        <div className="aside-left-mobile__text3">Tracking</div>
                        <div className="aside-left-mobile__text4">Cuentanos donde le haras seguimiento a tu seguro</div>

                    </div>

                </div>

                <div className="col-4 p-0">
                    <img src={chicaMobile} className="aside-left-mobile__img" alt="seguro de vehiculos"/>
                </div>

            </div>

        </div>


        <div className="col-12 col-sm-12 col-md-5 aside-left-desktop">

            <div className="row">
                <div className="col-12 text-center mt-5">
                    <img src={chicaI} className="aside-left-desktop__img" alt="seguro para tu vehiculo"/>
                </div>

                <div className="col-12 d-flex justify-content-center">

                    <div className="aside-left-desktop__cajon-texto">

                        <div className="aside-left-desktop__text1">!Nuevo¡</div>
                        <div className="aside-left-desktop__text2">Seguro Vehicular</div>
                        <div className="aside-left-desktop__text3">Tracking</div>
                        <div className="aside-left-desktop__text4">Cuentanos donde le haras seguimiento a tu seguro</div>

                    </div>

                </div>
            </div>

            <div className="col-12 aside-left-desktop__footer">
                <span>© 2021 RIMAC Seguros y Reaseguros.</span>
            </div>

        </div>

    </>

  );
}

export default LeftSide;