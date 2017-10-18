<!DOCTYPE html>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>

	<link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />
	<c:url value="/css/main.css" var="jstlCss" />
	<link href="${jstlCss}" rel="stylesheet" />

</head>
<body>


<div class="container">

	<div class="row">
		<div class="col-md-4">
			<label for="dataBegin">Введите начальный период</label>
			<input type="text" class="form-control" id="dataBegin">
			<p class="help-block">формат 2017-09-16</p>
		</div>
		<div class="col-md-4">
			<label for="dataEnd">Введите конечный период</label>
			<input type="text" class="form-control" id="dataEnd">
			<p class="help-block">формат 2017-09-17</p>

		</div>
		<div class="col-md-4">
			<label for="kod">Введите валюту</label>
			<input type="text" class="form-control" id="kod">
			<p class="help-block">Например AUD</p>

		</div>
	</div>
		<button class="btn btn-success" onclick="parse()">Применить</button>
</div>
<br/>
<div class="container">
	<table class="table table-bordered table-hover" id="tabl">
		<thead>
			<tr>
				<th>Дата</th>
				<th>Букв. код</th>
				<th>Единиц</th>
				<th>Валюта</th>
				<th>Курс</th>
			</tr>
		</thead>
		<tbody id="tabl-body">

		</tbody>
	</table>
	<div id="data-parse"></div>
</div>

<script type="text/javascript" src="webjars/jquery/3.1.1-1/jquery.min.js"></script>
<script type="text/javascript" src="webjars/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src=<c:url value="/js/main.js" />></script>
<%--<script src=<c:url value="https://www.cbr-xml-daily.ru/daily_json.js" />></script>--%>

</body>

</html>