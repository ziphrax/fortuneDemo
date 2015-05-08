<script type="text/x-handlebars" id="application">
	<div>
		<ul class="dropdown-menu" role="menu">
			{{#link-to 'clients' tagName='li' href=false}}<a href="#">Clients{{/link-to}}
			<li class="divider"></li>
			{{#link-to 'programmes' tagName='li' href=false}}<a href="#">Programmes</a>{{/link-to}}			
		</ul>
	</div>
	<div class="container">
		{{outlet}}
	</div>
</script>