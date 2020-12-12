<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/university">
<html>
<style>
#elements
{
color:red;
background-color:aqua;
}
#el2
{
text-align:center;
background-color:lime;
}
#el3
{
text-align:center;
background-color:lime;
}
</style>
<body>
<table border="2" border-color="lime">
<tr>
<th id="elements">Университет</th>
<th id="elements">Проходной балл</th>
<th id="elements">План набора</th>
<th id="elements">Город</th>
</tr>
<xsl:for-each select="spec">
<tr>
<td id="el2"><xsl:value-of select="name"/></td>
<td id="el3"><xsl:value-of select="score"/></td>
<td id="el3"><xsl:value-of select="plan"/></td>
<td id="el3"><xsl:value-of select="city"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
