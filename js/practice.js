$(document).ready(function(){
    var url = "https://reqres.in/api/users?page=2";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (datas) {
            var result = "";
            datas.data.forEach(element => {
                result +=`
                    <tr>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.email}</td>
                        <td>
                            <img src="${element.avatar}" class="img-fluid rounded-circle" width="30">
                        </td>
                    </tr>
                `;
            });
            $('table').append(result);
        }
    });
})