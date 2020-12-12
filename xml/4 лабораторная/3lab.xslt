<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/student">
<html>
<style>
#elements
{
color:red;
}
#el2
{
text-align:center;
}
#el3
{
text-align:center;
}
</style>
<body>
<table border="2" border-color="lime">
<tr>
<th id="elements">Фамилия</th>
<th id="elements">Имя</th>
<th id="elements">Отчество</th>
<th id="elements">Средний балл</th>
<th id="elements">Год рождения</th>
</tr>
<xsl:for-each select="information">
<xsl:sort select="year" order="ascending"/>
<xsl:choose>
<xsl:when test="point &lt;6">
<td style="background-color:green;"><xsl:value-of select="surname"/></td>
<td id="el3"><xsl:value-of select="name"/></td>
<td id="el3"><xsl:value-of select="middlename"/></td>
<td id="el3"><xsl:value-of select="point"/></td>
<td id="el3"><xsl:value-of select="year"/></td>
</xsl:when>
<xsl:when test="point=6">
<td style="background-color:red;"><xsl:value-of select="surname"/></td>
<td id="el3"><xsl:value-of select="name"/></td>
<td id="el3"><xsl:value-of select="middlename"/></td>
<td id="el3"><xsl:value-of select="point"/></td>
<td id="el3"><xsl:value-of select="year"/></td>
</xsl:when>
<xsl:otherwise>
<td style="background-color:aqua;"><xsl:value-of select="surname"/></td>
<td id="el3"><xsl:value-of select="name"/></td>
<td id="el3"><xsl:value-of select="middlename"/></td>
<td id="el3"><xsl:value-of select="point"/></td>
<td id="el3"><xsl:value-of select="year"/></td>
</xsl:otherwise>
</xsl:choose>
<tr></tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
