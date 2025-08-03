// ? Apı ya istek atacak fonksiyon
const getMenu = async () => {
  try {
    const response = await fetch("../db.json");
    const data = await response.json();
    // console.log(response);
    // console.log(data.menu);
    return data.menu;
  } catch (error) {
    console.log(`API Hatası: ${error}`);// hata durumunda kullancıyı bilgilendir.
        return [];// Eğer hata varsa boş bir dizi döndür.
  }
};
export default getMenu;
