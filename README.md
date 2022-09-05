
# Portal de tecnologia informatica
Este portal le permite a los usuarios:
- Solicitar hardware/software 
- Generar tickets
al Departamento de Informatica en una empresa



## Solicitar Hardware/Software

- Cada usuario podra tener asignado un item de cada categoria (Pc, Mouse, Teclado, Monitor)
- Para la categoria Licencia, solo se podra tener asignado una licencia para cada software. Por ejemplo (Office, Autocad, etc)
- Una vez que el usuario confirme los items, estos se asignaran y se podran visualizar desde el apartado "Mis items asignados"
- En caso de que el usuario quiera efectuar un cambio o modificacion sobre sus items asignados debe comunicarse mediante portalti@outlook.es
- Un ejemplo del hardware/software asignado a un usuario es el siguiente:
![App Screenshot](https://www.plantuml.com/plantuml/png/VT7VQzim40Vmz_ihX1y76PPiTqbX9INDHbZQZBLz7efyf5hr8qZdmIZztoVRmvvhg9vy9ztdA-5r91ceiGR07t-X8hOZjFaB78DqzINBRj2O39GaFFdm9pM-RpBGQOU3zJMQdxynHErTsjbBqjJKo3wL8i_W7BJ2IoPMULhm-h_FH_zUsjYuqoJYzd2tUpZyw7EMivmlnMhaosgcYr7_YautSO8_R3Vxwvj3Zr_Cy6_71UVBWUVLMxqOzRq_QKBrzERoZ_VRNYzc-grOvk_OvMWV6ZBUFq_e_MwplTlihdjTvFdCBowgnPQF2Q9g4m2iF3CPepuvhDkW-08iPnyML_tl1iQ7WWCJGo605KDH02k7eXpSnuWXSSxROq3s-IgzKhe6JGPCdj4ONVj_tQ1yJ5tj28FhcYjULC3GIcswCxQRJDUKIdlR3QoVFBNx7vMtQJYY8X-wmwGpcBwgkzsa0uoqUaQAxGGm9GDrNw_GhpMwkh7cBm00)

## Generar Ticket
Los usuarios podran generar tickets, estos tendran los campos:

    - Asunto: Breve descripcion
    - Descripcion
    - Fecha de finalizacion: fecha para la cual debe estar resuelto el ticket
    - Categoria:
        + Cambio (Instalacion de Hw o Sw)
        + Incidente
        + Capacitacion

Una vez completados los campos se genera el ticket asignandole el estado abierto y una prioridad dependiendo de los que faltan para la fecha de finalizacion: 

    - Alta: Menos de dos dias
    - Media: Entre 2 y 10 dias
    - Baja: Mas de 10 dias

Se le enviara un correo electronico al usuario con todos los datos del ticket generado



## Tecnologias utilizadas
