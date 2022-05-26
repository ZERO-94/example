import React from "react";

const MaintainPage = () => {
    return (
        <div style={{height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0BA1FE'}}>
            <div className="box-container" style={{ margin: '0 auto', padding: '2rem'}}>
                <img src='/images/logo-square.png' alt='logo' style={{width: '120px', margin: '0 auto', display: 'block', marginBottom: '1rem'}}/>
                <p style={{textAlign: 'center', color: '#FFF', fontSize: '2rem', fontWeight: 'bold'}}>Fundiin</p>
                <p style={{textAlign: 'center', color: '#FFF', fontSize: '1.2rem'}}>Kính chào quý khách hàng, nhằm nâng cao chất lượng dịch vụ qua Fundiin.</p>
                <p style={{textAlign: 'center', color: '#FFF', fontSize: '1.2rem'}}>Fundiin xin phép tạm dừng dịch vụ để bảo trì hệ thống.</p>
                <p style={{textAlign: 'center', color: '#FFF', fontSize: '1.2rem'}}>Trong lúc này quý khách hàng không thể thanh toán qua Fundiin Mong quý khách hàng thứ lỗi cho sự bất tiện này.</p>
            </div>
        </div>
    );
}

export default MaintainPage;