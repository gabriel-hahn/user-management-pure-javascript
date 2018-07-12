class Utils {

    //Format date dd/MM/yyyy hh:mm
    static dateFormat(date) {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }

}