//BÀI TẬP 1 : Tính tiền lương cho nhân viên 
/* Mô hình 3 khối :
+ Đầu Vào : Người nhân viên sẽ nhập vào số ngày làm của mình (N)
    Gỉa sử số ngày làm của nhân viên là N = 30 ngày. 
    Tiền lương của 1 ngày làm là 100.000 vnđ
+ Xử Lí : 
    Công thức tính lương cho sẵn : Lương = N*100.000
    Vd : số ngày làm là 30 ngày.
    => Lương = 30*100.000 = 3.000.000vnđ
+ Đầu Ra : Tiền lương của nhân viên
*/
var n = 30;
var luong =  30*100000 ;
console.log("Tiền lương của nhân viên là :" + luong.toLocaleString() + "vnđ"); //.toLocalString()

// BÀI TẬP 2 : Tính giá trị trung bình 
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào 5 số thực ngẫu nhiên 
giả sử 5 số đó là : 
number1 = 1 ; number2 = 3; number3 = 5 ; number4 = 7; number5 = 9;
+ Xử lí : 
Tạo 5 giá trị số thực sau đó tính tổng của 5 số đó rồi chia cho 5
VD : 
number1 = 1 ; number2 = 3; number3 = 5 ; number4 = 7; number5 = 9;
trungbinh = (number1 + number2 + number3 + number4 + number5)/5
=> trungbinh = (1+3+5+7+9)/5 = 5
+ Đầu ra : giá trị trung bình của 5 số thực ngẫu nhiên
 */
var number1 = 1;
var number2 = 3;
var number3 = 5;
var number4 = 7;
var number5 = 9;
var trungbinh = (number1 + number2 + number3 + number4 + number5 )/5;
console.log("Trung bình của 5 số là :" + trungbinh);

// BÀI TẬP 3 : Quy đổi tiền
 /* Mô hình 3 khối :
+ Đầu vào : 
 Gía USD hiện tại 23.500 vnđ
 Người dùng nhập vào số USD muốn đổi 
+ Xử lí : 
   Sau khi người dùng nhập vào số USD muốn đổi. 
   Số tiền VNĐ nhận được tính bằng : VND = USD*23.500
+ Đầu ra : Xuất ra số tiền sau khi quy đổi
*/
var usd = 2 ;
var vnd = usd*23500;
console.log("Số tiền sau khi quy đổi là : " + vnd.toLocaleString() + "vnđ");

// BÀI TẬP 4 : Tính diện tích và chu vi hình chữ nhật
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào chiều dài (cd) và chiều rộng (cr) của hình chữ nhật
+ Xử lí : 
Công thức tính chu vi : C = (cd + cr)*2
Công thức tính diện tích : S = cd*cr
+ Đầu ra : Xuất ra chu vi và diện tích của hình chữ nhật
*/
var cd = 5 ;
var cr = 9 ;
var C = (cd+cr)*2;
var S = cd*cr;
console.log("Chu vi của hình chữ nhật là : " + C +"m");
console.log("Diện tích của hình chữ nhật là :" + S + "m2");

// BÀI TẬP 5 : Tính tổng 2 ký số 
/*
Mô hình 3 khối 
- Đầu vào : nhập vào 1 số bất kì có 2 chữ số tùy ý 
- Xử Lí : 
+ tách lấy hàng chục n / 10 => làm tròn số Math.floor(n / 10)
+ tách lấy hàng đơn vị n % 10 => làm tròn số Math.floor(n % 10)
sau đó tính tổng 2 con số chục + đơn vị
vd : n = 99 => 9 + 9
- Đầu Ra :tổng
*/
var n = 99;
var chuc = Math.floor(n / 10)  ;
var donvi = Math.floor(n % 10)   ;
var tong = chuc + donvi;
console.log("Tổng 2 ký số là :" + tong);