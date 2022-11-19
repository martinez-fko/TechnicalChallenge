const useGetDataLocal = () => {
  const getData = (value) => {
    let token = JSON.parse(localStorage.getItem(value));
    let result = Object.values(token).join(' ');
    return result;
  };

  const getDataContact = () => {
    let token = JSON.parse(localStorage.getItem('contact'));
    return token;
  }

  return { getData, getDataContact };
};

export default useGetDataLocal;
