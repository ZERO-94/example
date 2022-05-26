import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';

const SingleBlog1 = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Chính sách chung' pageName='Chính sách chung' classElement='page-title-about' />
      <section className='blog-details-area bg-f9f9f9 ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='blog-details-desc'>
                

                <div className='article-content'>
                    <h4>1. ĐIỀU KHOẢN CHUNG</h4>
                    <div>
                        Fundiin cho phép Người dùng được thanh toán cho đơn hàng qua 3 kỳ thanh toán đến hạn mỗi tháng. Trong một vài trường hợp, Fundiin có thể yêu cầu Người dùng thanh toán nhiều hơn hoặc toàn bộ giá trị đơn hàng tại thời điểm mua hàng.
                    </div>
                    <div>Người dùng : (i) phải trên 18 tuổi, (ii) là công dân Việt Nam, (iii) sở hữu số điện thoại chính chủ từ các nhà mạng Viettel, Mobifone, Vinaphone.</div>
                    <div>Tất cả đơn hàng và lịch thanh toán đều phụ thuộc vào sự chấp thuận của Fundiin. Ví dụ, nếu Người dùng đang có các khoản quá hạn thanh toán, Người dùng sẽ không được hưởng các tiện ích trả sau trên Fundiin.</div>
                    <div>Người dùng có thể thanh toán các khoản phải trả chưa thanh toán trước ngày đến hạn. Trường hợp Người dùng không thanh toán đúng hạn, phí phạt muộn thanh toán sẽ được tính như sau cho mỗi khoản (kỳ) thanh toán:</div>
                    <ul>
                        <li>Số tiền phạt/lần/kỳ: 0.6% giá trị đơn hàng, làm tròn lên đơn vị nghìn đồng (vd đơn hàng giá trị 3 triệu thì số tiền phạt/lần/kỳ = 18.000 đ)</li>
                        <li>Lần phạt đầu tiên sau khi muộn đến ngày thứ 2 sau ngày đến hạn: 0.6% giá trị đơn hàng (vd đến hạn ngày 1/10 mà ngày 3/10 bạn mới thanh toán).</li>
                        <li>Sau đó, phí phạt sẽ cộng thêm 0.6% giá trị đơn hàng cho mỗi 7 ngày muộn thêm.</li>
                        <li>Tổng các khoản phạt sẽ được giới hạn, không vượt quá 25% giá trị đơn hàng.</li>
                    </ul>
                    <div>Việc vận chuyển cũng như chất lượng sản phẩm, quy định về hoàn trả, đổi trả, bảo hành là trách nhiệm của các Đối tác của Fundiin mà bạn mua hàng. Fundiin không chịu trách nhiệm này.</div>
                    <div>Khách hàng cam kết đã kiểm tra chất lượng, tiêu chuẩn sản phẩm trước khi mua cũng như tìm hiểu về uy tín và khả năng đáp ứng cam kết của các Đối tác của Fundiin trước khi mua hàng.</div>
                    <div>Khách hàng cam kết đã đọc, hiểu, và đồng ý với các điều khoản trong Chính sách chung này, cũng như điều khoản trong Chính sách quyền riêng tư và các điều khoản khác được quy định bởi Fundiin.</div>

                    <br />
                    <h4>2. HÌNH THỨC THANH TOÁN</h4>
                    <div>Người dùng có thể mua sắm trực tuyến thuận lợi hơn với nhiều hình thức thanh toán linh hoạt bằng thẻ tín dụng, thẻ ghi nợ, thẻ ATM thông qua cổng thanh toán trực tuyến.</div>
                    <ul>
                        <li>Thanh toán trực tuyến bằng thẻ ATM: Thanh toán nhanh chóng, tiện lợi bằng thẻ ATM nội địa có đăng ký Internet Banking.</li>
                        <li>Thanh toán trực tuyến bằng thẻ quốc tế Visa, Mastercard: Fundiin chấp nhận thanh toán bằng thẻ quốc tế với các loại thẻ tín dụng (Credit card), Thẻ ghi nợ (Debit card) VISA hoặc Mastercard.</li>
                    </ul>
                    <div>
                        Fundiin cho phép Người dùng được thanh toán cho đơn hàng qua 3 kỳ thanh toán đến hạn mỗi tháng. Trong một vài trường hợp, Fundiin có thể yêu cầu Người dùng thanh toán nhiều hơn hoặc toàn bộ giá trị đơn hàng tại thời điểm mua hàng.
                    </div>
                    <div>Tất cả đơn hàng và lịch thanh toán đều phụ thuộc vào sự chấp thuận của Fundiin. Ví dụ, nếu Người dùng đang có các khoản quá hạn thanh toán, Người dùng sẽ không được hưởng các tiện ích trả sau trên Fundiin.</div>
                    <div>Người dùng có thể thanh toán các khoản phải trả chưa thanh toán trước ngày đến hạn. Trường hợp Người dùng không thanh toán đúng hạn, phí phạt muộn thanh toán sẽ được tính như sau cho mỗi khoản (kỳ) thanh toán:</div>
                    <ul>
                        <li>Số tiền phạt/lần/kỳ: 0.6% giá trị đơn hàng, làm tròn lên đơn vị nghìn đồng (vd đơn hàng giá trị 3 triệu thì số tiền phạt/lần/kỳ = 18.000 đ)</li>
                        <li>Lần phạt đầu tiên sau khi muộn đến ngày thứ 2 sau ngày đến hạn: 0.6% giá trị đơn hàng (vd đến hạn ngày 1/10 mà ngày 3/10 bạn mới thanh toán).</li>
                        <li>Sau đó, phí phạt sẽ cộng thêm 0.6% giá trị đơn hàng cho mỗi 7 ngày muộn thêm.</li>
                        <li>Tổng các khoản phạt sẽ được giới hạn, không vượt quá 25% giá trị đơn hàng.</li>
                    </ul>

                    <br />
                    <h4>3. CHÍNH SÁCH VẬN CHUYỂN</h4>
                    <div>Các Đối tác cung cấp sản phẩm, dịch vụ sẽ trực tiếp chịu trách nhiệm vận chuyển sản phẩm hoặc cung cấp dịch vụ cho Ngươi dùng. Fundiin không chịu trách nhiệm về vận chuyển.</div>

                    <br />
                    <h4>4. CHÍNH SÁCH BẢO HÀNH</h4>
                    <div>
                        Các Đối tác cung cấp sản phẩm, dịch vụ có chính sách bảo hành riêng của mình, Người dùng vui lòng kiểm tra, tìm hiểu chính sách bảo hàng của các Đối tác này. Fundiin không chịu trách nhiệm bảo hành, hay đảm bảo chất lượng bảo hành, hay
                        khả năng cung cấp dịch vụ bảo hành của các Đối tác.
                    </div>
                    <div>Người dùng cam kết đã kiểm tra chất lượng, tiêu chuẩn sản phẩm trước khi mua cũng như tìm hiểu về uy tín và khả năng đáp ứng cam kết của các Đối tác của Fundiin trước khi mua hàng.</div>

                    <br />
                    <h4>5. CHÍNH SÁCH ĐỔI/TRẢ HÀNG</h4>
                    <div>
                        Các Đối tác cung cấp sản phẩm, dịch vụ có chính sách đổi/trả hàng riêng của mình, Người dùng vui lòng kiểm tra, tìm hiểu chính sách đổi/trả hàng của các Đối tác này. Fundiin không chịu trách nhiệm đổi, trả hàng, hay đảm bảo chất lượng,
                        khả năng đổi/trả hàng theo chính sách của các Đối tác.
                    </div>
                    <div>Người dùng cam kết đã kiểm tra chất lượng, tiêu chuẩn sản phẩm trước khi mua cũng như tìm hiểu về uy tín và khả năng đáp ứng cam kết của các Đối tác của Fundiin trước khi mua hàng.</div>

                </div>

                
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog1;
