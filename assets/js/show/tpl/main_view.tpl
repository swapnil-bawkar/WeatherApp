<table class="table table-striped">
	<thead>
		<tr>
			<th>Date</th>
		    <th><%=new Date(dt)%></th>
		</tr>
	</thead>
	<tbody>
		<tr>
        	<td>Humidity</td>
        	<td><%=humidity%></td>
        </tr>
		<tr>
        	<td>Pressure</td>
        	<td><%=pressure%></td>
        </tr>
		<tr>
        	<td>Speed</td>
        	<td><%=speed%></td>
        </tr>
		<tr>
            <td>Morning Temperature</td>
        	<td><%=temp.morn%></td>
        </tr>
		<tr>
            <td>Day Temperature</td>
        	<td><%=temp.day%></td>
        </tr>
		<tr>
        	<td>Evening Temperature</td>
        	<td><%=temp.eve%></td>
        </tr>
		<tr>
            <td>Night Temperature</td>
        	<td><%=temp.night%></td>
    	</tr>
	</tbody>
</table>