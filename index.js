var dados = []

function ApagaRegistro(id){
    let _confirm = confirm("Deseja excluir este registro?")
    
    if (_confirm){
        for(let i = 0; i < dados.length; i++){
            if(dados[i].ID == id){
                dados.splice(i, 1)
            }
        }

        PopulaTabela()
    }
}
function EditaRegistro(id){
   
    $("#tarefaModal").modal("show")

    dados.forEach(function(item){
        if (item.ID == id){
            $("#hdID").val(item.ID)
            $("#txtTarefa").val(item.Tarefa)
            $("#txtDescricao").val(item.Descricao)
            $("#resolucao").val(item.Realizada)
        }
    })
}

function PopulaTabela() {
    if(Array.isArray(dados)){
       
        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblTarefas tbody").html("")
       
        dados.forEach(function (item){
            $("#tblTarefas tbody").append(`<tr>
               <td>${item.ID}</td>
               <td>${item.Tarefa}</td>
               <td>${item.Descricao}</td>
               <td>${item.Realizada}</td>
               <td><button type="button" class="btn btn-primary" onclick="javascript:EditaRegistro(${item.ID});"><i class="fa fa-edit"></button></td>
               <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash"></button></td>
                
            </tr>`)
        })
    }
}
$(function () {
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

    $("#btnSalvar").click(function () {

        let _id = $("#hdID").val()
        let Tarefa = $("#txtTarefa").val()
        let Descricao = $("#txtDescricao").val()
        let Realizada = $("#resolucao").val()


        if(!_id || _id == "0"){
        let registro = {}
        registro.Tarefa = Tarefa
        registro.Descricao = Descricao
        registro.Realizada = Realizada
        
        registro.ID = dados.length + 1
        dados.push(registro)
        }
        else {
            dados.forEach(function(item){
                if(item.ID == _id){
                    item.Tarefa = Tarefa
                    item.Descricao = Descricao
                    item.Realizada  = Realizada
                }
            })
        }

        alert("Registro Salvo com Sucesso")
        $("#tarefaModal").modal("hide")


        $("#hdID").val("0")
        $("#txtTarefa").val("")
        $("#txtDescricao").val("")
        $("#resolucao").val("")

        PopulaTabela()
    })

})