$(window).on("load", function () {
    $("#getDataBtn").on("click", function () {
        $.ajax({
            url: "https://wtassign3.herokuapp.com/api/products",
            type: "GET", 
            beforeSend: function () {
                $(".loader-row").removeClass("d-none");
            },
            success: function (response, status) {
                $(".loader-row").addClass("d-none");
                let html = "";
                for (let i = 0; i < response.length; i++) {
                    const { id, name} = response[i];
                    html += `
                        <tr>
                            <td>${id}</td>
                            <td>${name}</td>
                        </tr>
                    `;
                }
                $(".user-table").find("tbody").append(html);
            },
            error: function (error, status) {
                $(".loader-row").addClass("d-none");
                let html = `
                        <tr>
                            <td colspan="3"> 
                                <div class="alert alert-danger">
                                    Fuckin API  
                                </div>
                            </td>
                        </tr>
                    `;
                $(".user-table").find("tbody").append(html);
            },
        });
    });
});
