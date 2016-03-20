function AjaxFormRequest(result_id,feedback_form,url) {
	jQuery.ajax({
		url: url,
		type: "POST",
		dataType: "html",
		data: jQuery("#"+feedback_form).serialize(),
		success: function(response) {
		document.getElementById(result_id).innerHTML = response;
		},
		error: function(response) {
		document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
		}
	});

$(':input','#feedback_form')
.not(':button, :submit, :reset, :hidden')
.val('')
.removeAttr('checked')
.removeAttr('selected');
}