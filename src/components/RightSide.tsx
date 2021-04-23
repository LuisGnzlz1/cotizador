import {useState} from "react";
import {getDatosAsegurado} from "../funciones/api";
import InputMask from 'react-input-mask';

export function RightSide() {

    const [tipodocumento, setTipoDocumento] = useState('dni');
    const [numerodocumento, setNumerodocumento] = useState('');
    const [celular, setCelular] = useState('');
    const [placa, setPlaca] = useState('');
    const [check, setCheck] = useState(true);

    const handleChange = (e:any, campo:string):void => {

        if(campo === 'tipodocumento'){
            setTipoDocumento(e.target.value);
        }else if(campo === 'numerodocumento'){
            setNumerodocumento(e.target.value);
        }else if(campo === 'celular'){
            setCelular(e.target.value);
        }else if(campo === 'placa'){
            setPlaca(e.target.value );
        }else if(campo === 'check'){
            setCheck(!check);
        }
    }

    const resetForm = ():void => {

        setTipoDocumento('dni');
        setNumerodocumento('');
        setCelular('');
        setPlaca('');
        setCheck(true);
    }

    const cotizar = ():void => {

        let name = '';

        getDatosAsegurado().then(result => {
            name = result[0].name.first;

            resetForm();
            alert('¡Hola! ' + name);

        });
    }


    let isValidateForm = (tipodocumento.length > 0 && numerodocumento.length >= 8 && (celular.length === 9 ) && placa.length === 7 && check);

    const digit = /[0-9]/;
    const letras = /[a-z]/;

    const mask = [letras,letras,letras, '-',digit, digit, digit];

  return (
    <>
        <div className="col-12 col-sm-12 col-md-7 aside-right">

            <div>

                <div className="container p-0">
                    <div className="abs-center">

                        <form className="p-3 form">

                            <h3 className="aside-right__titulo-form">Déjanos tus datos</h3>

                            <div className="row pt-2 pb-2">
                                <div className="col-4 pe-0">
                                    <select className="form-select form-select-lg" name="tipodocumento" value={tipodocumento} onChange={ (e) => handleChange(e, 'tipodocumento') }>
                                        <option value="dni">DNI</option>
                                        <option value="ce">CE</option>
                                    </select>
                                </div>
                                <div className="col-8">

                                    <InputMask  className="form-control form-control-lg"
                                                value={numerodocumento}
                                                onChange={ (e) => handleChange(e, 'numerodocumento') }
                                                placeholder="Nro. de doc"
                                                name="numerodocummento"
                                                mask="999999999"
                                                maskPlaceholder={''}
                                    />
                                </div>
                            </div>

                            <div className="form-group pt-2 pb-2">

                                <InputMask  className="form-control form-control-lg"
                                            value={celular}
                                            onChange={ (e) => handleChange(e, 'celular') }
                                            placeholder="Celular"
                                            name="celular"
                                            mask="999999999"
                                            maskPlaceholder={''}
                                />

                            </div>

                            <div className="form-group pt-2 pb-2">

                                <InputMask  className="form-control form-control-lg"
                                            value={placa}
                                            onChange={ (e) => handleChange(e, 'placa') }
                                            placeholder="Placa"
                                            name="placa"
                                            mask={mask}
                                            maskPlaceholder={''}
                                />

                            </div>

                            <div className="form-group pt-2 pb-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={check} onChange={ (e) => handleChange(e, 'check')} />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                                    </label>
                                </div>
                            </div>

                            <button type="button" onClick={ () => cotizar() } className="btn btn-danger btn-lg" disabled={!isValidateForm}>Cotizalo</button>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    </>

  );
}

export default RightSide;