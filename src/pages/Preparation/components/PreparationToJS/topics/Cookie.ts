function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  console.log(matches ? decodeURIComponent(matches[1]) : undefined);
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const topicCookie = () => {
  console.log(`%cEvent loop block start`, 'color:darkgreen; font-size: 16px');

  // +1 день от текущей даты
  {
    let date: Date | string = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    // document.cookie = 'user=John; expires=' + date

    document.cookie = 'user=John; max-age=7';

    // console.log('document.cookie: ', document.cookie)
  }
  console.log(`%cEvent loop block finished`, 'color:tomato; font-size: 14px');
};

export default topicCookie;
