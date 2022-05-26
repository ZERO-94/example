import React from 'react';

const BankAccountList = () => {

    const handleClick = (value) => {
        navigator.clipboard.writeText(value);
        ($('.toast') as any).toast('show');
    }

    return (
        <>
        <div style={{position: 'relative', width: '100%'}}>
            <div className="toast" style={{position: 'absolute', top: '10%', left:'48%',zIndex: '99999'}}>
                <div className="toast-header">
                <strong className="mr-auto text-primary">Sao chép số tài khoản thành công!</strong>
                <button type="button" className="ml-2 mb-1 close" onClick= {() => ($('.toast') as any).toast('hide')}>
                    <span >&times;</span>
                </button>
                </div>
            </div>
        </div>
            <div className='col-md-8 col-sm-12' style={{margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{height: 'fit-content', padding: '2rem', background: '#e9ecef'}}>
                    <h4 style={{textAlign: 'center', color: 'red', marginBottom: '2rem'}}>Người thụ hưởng CÔNG TY CỔ PHẦN FUNDIIN</h4>
                    <div className='row' style={{padding: '1rem', background: '#dee2e6'}}>
                        <div className='col-md-6 col-sm-12'>
                            <span className="font-bold bank-name" style={{fontWeight: 'bold', color: '#0091cc'}}>Ngân hàng: ACB</span> <br/>
                            Chi nhánh: ACB CN Ba Tháng Hai
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <input className="form-control d-inline-block" readOnly value="80970978" style={{width: '60%', marginRight: '10%', height: '38px', borderRadius: '5px'}} />
                            <button className="btn btn-info d-inline-block pull-right" style={{width: '30%', height: '38px'}} onClick={() => handleClick('80970978')}><i className="fa fa-copy" ></i>Copy</button>
                        </div>
                    </div>
                    <div className='row' style={{padding: '1rem'}}>
                        <div className='col-md-6 col-sm-12'>
                            <span className="font-bold bank-name" style={{fontWeight: 'bold', color: '#0091cc'}}>Ngân hàng: VCB</span> <br/>
                            Chi nhánh: VCB CN Kỳ Đồng
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <input className="form-control d-inline-block" readOnly value="0721000648679" style={{width: '60%', marginRight: '10%', height: '38px', borderRadius: '5px'}} />
                            <button className="btn btn-info d-inline-block pull-right" style={{width: '30%', height: '38px'}} onClick={() => handleClick('0721000648679')}><i className="fa fa-copy" ></i>Copy</button>
                        </div>
                    </div>
                    <div className='row' style={{padding: '1rem', background: '#dee2e6'}}>
                        <div className='col-md-6 col-sm-12'>
                            <span className="font-bold bank-name" style={{fontWeight: 'bold', color: '#0091cc'}}>Ngân hàng: Vietinbank</span> <br/>
                            Chi nhánh: Vietin Chi nhánh 10
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <input className="form-control d-inline-block" readOnly value="118002686910" style={{width: '60%', marginRight: '10%', height: '38px', borderRadius: '5px'}} />
                            <button className="btn btn-info d-inline-block pull-right" style={{width: '30%', height: '38px'}} onClick={() => handleClick('118002686910')}><i className="fa fa-copy" ></i>Copy</button>
                        </div>
                    </div>
                    <div className='row' style={{padding: '1rem'}}>
                        <div className='col-md-6 col-sm-12'>
                            <span className="font-bold bank-name" style={{fontWeight: 'bold', color: '#0091cc'}}>Ngân hàng: Techcombank</span> <br/>
                            Chi nhánh: Gia định
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <input className="form-control d-inline-block" readOnly value="19037754617618" style={{width: '60%', marginRight: '10%', height: '38px', borderRadius: '5px'}} />
                            <button className="btn btn-info d-inline-block pull-right" style={{width: '30%', height: '38px'}} onClick={() => handleClick('19037754617618')}><i className="fa fa-copy" ></i>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BankAccountList;