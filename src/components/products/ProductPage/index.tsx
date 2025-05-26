import { ProductImage, ProductInformation } from '@/components/products'
import { IProductPage } from './type'
import style from './style.module.css'

const ProductPage: React.FC<IProductPage> = ({ }) => {
	return (
		<div className={style["container"]}>
			
			<p>Tạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cartTạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cartTạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cartTạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cartTạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cartTạo 1 new nextjs project
Dựng thanh điều hướng responsive và sticky. (navbar cách top 1 khoảng khoảng 60px như hình dưới)
Navbar có logo trái, menu giữa (Home, Products, About), Login bên phải.
Khi ở mobile: menu collapse thành nút hamburger → bấm hiện menu dọc.
Navbar sticky khi scroll, thay đổi background khi cuộn xuống.
Khi Click products ở navbar sẽ hiển thị 1 list product và chuyển đến trang /products tạo folfer products/page.tsx

Danh sách products được lấy về từ SSR
tạo 1 next api là get-products (tìm hiểu route handlers), api sẽ trả về data từ 1 file json.
Tạo 1 file json products để mockup list products data với mỗi product bao gồm title, description, price, compareAtPrice, imageUrl

Trang /products hiển thị danh sách sản phẩm dạng grid (4 cột).
Mỗi item có hình ảnh, tên sản phẩm (title), giá, nút "Add to cart".
Responsive: 1 cột trên mobile, 2 cột trên tablet, 4 cột trên desktop.
Hover vào card sản phẩm hiển thị hiệu ứng scale nhẹ

Thêm 1 icon cart trên header, khi click vào icon thì side cart được hiển thị bên phải màn hình
Các product item thêm button add to cart, khi click vào btn thì thêm sản phầm vào giỏ hàng (lưu bằng cookie storage) có thể sử dụng lib js cookie
Tạo cart page cũng hiển thị danh sách cart item như trong side cart. Hiển thị tổng số tiền các sản phẩm
Khi sản phẩm được thêm vào giỏ hàng thành công thì tự động open side cart</p>
		</div>
	)
}

export default ProductPage