export const handleFullScreenAction = ({ el, open, setState }) => {
  console.log('OPEN: ', open)
  console.log('ELEMENT: ', el)
  // enter full screen
  if (open) {
    setState(true)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  } else {
    setState(false)
    window.setTimeout(() => {
      const { top } = el?.getBoundingClientRect() || { top: 0 }
      window.scrollTo({
        top: top - 30,
        left: 0,
        behavior: 'smooth',
      })
    }, 200)
  }
}

export const calculateRangeTime = (rangeTimeValue) => {
  let count = 0
  switch (rangeTimeValue) {
    case 'last1Month':
      count = 1
      break
    case 'last3Months':
      count = 3
      break
    case 'last6Months':
      count = 6
      break
    case 'last9Months':
      count = 9
      break
    case 'last1Years':
      count = 12
      break
    case 'last2Years':
      count = 24
      break
    default:
      break
  }
  return count
}

export const getFormatDateChart = (date) =>
  `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${
    date.getMonth() + 1
  }`

export const customDateFormat = (dateString) => {
  const [year, month] = dateString.split('-');

  // Thêm ngày là 01 và nối các thành phần thành chuỗi mới
  const customFormatDate = `${year}/${month}/01`;

  return customFormatDate;
}

export function formatDateToCustomFormat() {
  var now = new Date();

  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var day = String(now.getDate()).padStart(2, '0');

  var customFormatDate = `${year}/${month}/${day}`;

  return customFormatDate;
}

export const formatDate = (date) => {
  const nowDate = new Date(date);

  // Lấy các giá trị ngày, tháng, năm, giờ, phút, giây
  const day = String(nowDate.getDate()).padStart(2, '0');
  const month = String(nowDate.getMonth() + 1).padStart(2, '0'); // Lưu ý: Tháng trong JavaScript bắt đầu từ 0
  const year = nowDate.getFullYear();
  const hours = String(nowDate.getHours()).padStart(2, '0');
  const minutes = String(nowDate.getMinutes()).padStart(2, '0');
  const seconds = String(nowDate.getSeconds()).padStart(2, '0');
  
  // Chuyển đổi thành định dạng "dd/mm/yyyy hh:mm:ss"
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  return formattedDate
}