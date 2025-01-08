---
title: Participación individual de su ETH
description: Una visión general de cómo empezar a postar su ETH individualmente
lang: es
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Leslie, el rinoceronte, en su propio chip.
sidebarDepth: 2
summaryPoints:
  - Reciba el máximo de recompensas directamente del protocolo al mantener su validador conectado y funcionando correctamente
  - Ejecute hardware doméstico y contribuya personalmente a la seguridad y a la descentralización de la red Ethereum.
  - Desconfíe y no deje nunca de controlar las claves de sus fondos
---

## ¿Qué es staking individual? {#what-is-solo-staking}

Participación individual es el acto de [ ejecutar un nodo Ethereum](/run-a-node/) conectado a Internet y depositar 32 ETH para activar un [validador](#faq), abriendo la posibilidad de participar directamente en el consenso de la red.

**El staking individual aumenta la descentralización de la red Ethereum**, haciendo que sea más resistente a la censura y robusta contra ataques. Puede que otros métodos de participación no ayuden a la red de la misma manera. La participación en solitario es la mejor opción de participación para asegurar Ethereum.

Un nodo Ethereum consiste tanto en un cliente de capa de ejecución (EL), como en un cliente de capa de consenso (CL). Estos clientes son programas que funcionan estrechamente entre sí, en conjunto con un par de claves de validación, para verificar transacciones y bloques, certificar el encabezado corecto de la cadena, resumir verificaciones, y proponer bloques.

Los participantes individuales conlleva la responsabilidad de operar el hardware necesario para ejecutar dichos clientes. Es muy recomendable utilizar una máquina específicamente dedicada a esto, que usted opere desde su hogar, algo que es extremadamente beneficioso para la salud de la red.

El participante individual recibe las recompensas directamente desde el protocolo por mantener su validador funcionando correctamente y en línea.

## ¿Por qué debería participar de forma individual? {#why-stake-solo}

La participación en solitario conlleva más responsabilidad, pero proporciona el máximo control posible sobre los fondos y la configuración para realizarla.

<CardGrid>
  <Card title="Gane ETH recién salidos" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Control completo" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="Seguridad de la red" emoji="🔐" description="Solo staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Consideraciones antes de hacer una participación individual {#considerations-before-staking-solo}

Por mucho que deseemos que la participación individual fuera accesible y libre de riesgos para todos, esta no es la realidad. Hay algunas consideraciones prácticas y serias que debemos tener en cuenta antes de elegir la participación individual de su ETH.

<InfoGrid>
<ExpandableCard title="Lectura obligatoria" eventCategory="SoloStaking" eventName="clicked required reading">
Al operar su propio nodo debería invertir tiempo en aprender cómo utilizar el software que ha elegido. Esto implica leer la documentación pertinente y estar en sintonía con los canales de comunicación de los equipos de desarrollo relacionados.

Cuanto más entienda sobre el software que está ejecutando y cómo funciona la prueba de participación, menos riesgo tendrá como participante, y le será más fácil solucionar cualquier incidente que pueda surgir en su función como operador de nodos.
</ExpandableCard>

<ExpandableCard title="Dominio informático" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
La configuración del nodo requiere un nivel de comodidad razonable al trabajar con ordenadores, aunque las nuevas herramientas lo facilitan con el tiempo. Entender la interfaz de la línea de comandos es útil, pero no estrictamente necesario.

También requiere una configuración de hardware muy básica, y cierta comprensión de las especificaciones mínimas recomendadas.
</ExpandableCard>

<ExpandableCard title="Gestión segura de claves" eventCategory="SoloStaking" eventName="clicked secure key management">
De la misma manera que las claves privadas protegen su dirección de Ethereum, necesitará generar claves específicamente para su validador. Debe entender cómo proteger cualquier frase semilla o clave secreta de forma efectiva.{' '}

<a href="/security/">Seguridad y prevención de estafa Ethereum</a>
</ExpandableCard>

<ExpandableCard title="Mantenimiento" eventCategory="SoloStaking" eventName="clicked maintenance">
El hardware ocasionalmente falla, en las conexiones de red suceden desconexiones, y el software cliente ocasionalmente necesita actualizarse. El mantenimiento de nodos es inevitable y de vez en cuando requerirá tu atención. Conviene que esté al tanto de cualquier actualización de red prevista, o de otras actualizaciones críticas del software cliente.
</ExpandableCard>

<ExpandableCard title="Tiempo de funcionamiento fiable" eventCategory="SoloStaking" eventName="clicked reliable uptime">
Sus recompensas son proporcionales al tiempo que su validador esté en línea y certifique correctamente. El tiempo de inactividad incurre en penalizaciones proporcionales a los validadores que estén desconectados al mismo tiempo, pero <a href="#faq"> no ocasiona recortes</a>. El ancho de banda también importa, ya que las recompensas disminuyen por las certificaciones que no se reciben a tiempo. Los requisitos variarán, pero se recomienda un mínimo de 10 Mb/s de descarga y carga.
</ExpandableCard>

<ExpandableCard title="Riesgo de «recorte»" eventCategory="SoloStaking" eventName="clicked slashing risk">
Distinta a las penalizaciones por inactividad por estar fuera de línea, <em>el recorte</em> es una penalización mucho más grave reservada para infracciones maliciosas. Al ejecutar un cliente minoritario con sus claves cargadas en una sola máquina cada vez, se reduce el riesgo de ser penalizado por recortes. Dicho esto, todos los participantes deben ser conscientes de los riesgos de los recortes.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/"> Más sobre recortes y el ciclo de vida del validador</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Cómo funciona {#how-it-works}

<StakingHowSoloWorks />

Mientras esté activo, obtendrá recompensas ETH que se depositarán periódicamente en su dirección de retirada.

Si lo desea, puede salir como validador, lo que elimina el requisito de estar en línea y detiene cualquier recompensa adicional. Su saldo restante se retirará entonces a la dirección de retirada que usted designe durante la configuración.

[Más sobre los retiros de Staking](/staking/withdrawals/)

## Familiarícese con el Lanzador de participaciones {#get-started-on-the-staking-launchpad}

El Lanzador de participaciones es una aplicación de código abierto que le ayudará a convertirse en un participante. Le guiará a través de la elección de sus clientes de software, a generar sus llaves y depositar su ETH en el contrato de depósito de participación. Se proporciona una lista de verificación para asegurarse de que ha cubierto todo para configurar su validador de forma segura.

<StakingLaunchpadWidget />

## Qué considerar respecto a las herramientas de configuración de nodos y clientes {#node-tool-considerations}

Cada vez hay más herramientas y servicios para ayudarle a que usted haga una participación individual de su ETH, pero cada uno de ellos conlleva diferentes riesgos y beneficios.

Los indicadores de atributos a continuación indican las fortalezas o debilidades que puede tener cada herramienta de participación. Utilice esta sección como referencia sobre cómo definimos estos atributos, mientras está eligiendo las herramientas que le ayudarán con su experiencia de participación.

<StakingConsiderations page="solo" />

## Explora las herramientas de configuración de nodos y clientes {#node-and-client-tools}

Hay una variedad de opciones disponibles para ayudarle con su configuración. Utilice los indicadores de arriba para guiarle a través de las herramientas que se muestran a continuación.

<ProductDisclaimer />

### Herramientas de nodo

<StakingProductsCardGrid category="nodeTools" />

Por favor, tenga en cuenta la importancia de elegir un [cliente minoritario](/developers/docs/nodes-and-clients/client-diversity/) ya que mejora la seguridad de la red y limita su riesgo. Las herramientas que le permiten configurar un cliente minoritario se expresan como <em style={{ textTransform: "uppercase" }}>«multicliente».</em>

### Generadores de claves

Estas herramientas pueden utilizarse como alternativa a la [CLI de depósito de participación](https://github.com/ethereum/staking-deposit-cli/) para ayudar con la generación de claves.

<StakingProductsCardGrid category="keyGen" />

¿Tiene alguna sugerencia para una herramienta de participación no cubierta? Eche un vistazo a nuestra [política de listado de productos](/contributing/adding-staking-products/) para ver si le parece una opción aceptable y enviarla para su revisión.

## Explorar guías de participación individual {#staking-guides}

<StakingGuides />

## Preguntas más frecuentes {#faq}

Estas son algunas de las preguntas más comunes sobre la participación que vale la pena conocer.

<ExpandableCard title="¿Qué es un validador?">

Un <em>validador</em> es una entidad virtual que vive en Ethereum y participa en el consenso del protocolo Ethereum. Los validadores están representados por un saldo, una clave pública y otras propiedades. Un <em>cliente validador</em> es el software que actúa en nombre del validador al mantener y utilizar su clave privada. Un solo cliente validador puede mantener muchos pares de claves y controlar muchos validadores.

</ExpandableCard>

<ExpandableCard title="¿Puedo depositar más de 32 ETH?">
Cada par de claves asociadas a un validador requieren exactamente 32 ETH para ser activadas. Más ETH depositado en un solo par de claves no incrementa el potencial de recompensas, ya que cada validador está limitado a un <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">saldo efectivo</a> de 32 ETH. Esto significa que la participación se realiza en incrementos de 32 ETH, cada uno con su propio conjunto de claves y saldo.

No deposite más de 32 ETH para un solo validador. No aumentará sus recompensas. Si se ha establecido una dirección de retirada para el validador, cualquier exceso de fondos superior a 32 ETH se retirará automáticamente a esta dirección durante el próximo <a href="/staking/withdrawals/#validator-sweeping">barrido del validador</a>.

Si la participación individual le parece demasiado exigente, plantéese el usar un proveedor de <a href="/staking/saas/">participación como servicio</a>, o si está trabajando con menos de 32 ETH, plantéese los <a href="/staking/pools/">grupos de participación</a>.
</ExpandableCard>

<ExpandableCard title="¿Sufriré «recortes» si me desconecto? (En una palabra: No.)">
El desconectarse cuando la red está finalizando correctamente NO producirá «recortes». Se le aplicarán ligeras <em>penalizaciones por inactividad</em> si su validador no está disponible para certificar una época determinada (a cada 6,4 minutos), que es muy diferente del <em>«recorte»</em>. Estas penalizaciones son ligeramente inferiores a la recompensa que usted habría ganado si el validador hubiera estado disponible para certificar, y las pérdidas pueden devolverse al cabo del mismo tiempo aproximadamente en línea.

Tenga en cuenta que las penalizaciones por inactividad son proporcionales a los validadores que estén fuera de línea al mismo tiempo. En casos en los que una gran parte de la red está desconectada a la vez, las penalizaciones para cada uno de estos validadores serán mayores que cuando un validador no esté disponible.

En casos extremos, si la red se detiene con más de un tercio de los validadores fuera de línea como resultado, estos usuarios serán penalizados con lo que se conoce como una <em>fuga cuadrática de inactividad</em>, esto es, un drenaje exponencial de ETH de las cuentas de validadores fuera de línea. Esto permite que la red eventualmente se regenere al quemar ETH de validadores inactivos hasta que su balance alcance los 16 ETH, en cuyo momento serán expulsados automáticamente del grupo de validadores. Los validadores en línea restantes eventualmente comprenderán más de 2/3 la red de nuevo, satisfaciendo la supermayoría necesaria para finalizar la cadena una vez más.
</ExpandableCard>

<ExpandableCard title="¿Cómo puedo asegurarme de no sufrir un «recorte»?">
Francamente, esto es algo que no se puede garantizar al cien por cien, pero si se actúa de buena fe, se ejecuta un cliente minoritario y solo mantiene sus claves de firma en una máquina cada vez, el riesgo de sufrir «recortes» es prácticamente cero.

Solo hay unas cuantas formas específicas de que un validador sea penalizado con «recortes» y expulsado de la red. A fecha de publicación de este blog, los «recortes» que se han producido han sido exclusivamente un producto de configuraciones de hardware redundantes donde las claves de firma se almacenan en dos máquinas separadas a la vez. Esto puede dar como resultado casualmente un <em>doble voto</em> de sus llaves, lo cual es una acción penalizada.

Ejecutar un cliente de supermayoría (cualquier cliente utilizado por más de 2/3 la red) también tiene el riesgo de un potencial «recorte» en el caso de que este cliente tenga un error que resulte en una bifurcación de la cadena. Esto puede producir una bifurcación defectuosa que se finalice. Para revertir a la cadena prevista, se requeriría enviar un <em>voto surround («envolvente») </em> intentando deshacer un bloque finalizado. Esto también es una acción penalizada con «recorte» y que se puede evitar simplemente ejecutando un cliente minoritario en su lugar.

Errores equivalentes en un cliente minoritario <em>nunca finalizarán (bloques) </em> y, por lo tanto, nunca resultarían en un voto surround («envolvente»), y simplemente resultaría en penalizaciones por inactividad, <em>no de «recorte»</em>.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Más información sobre la importancia de ejecutar un cliente minoritario.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Más información sobre la prevención de «recortes»</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="¿Qué cliente es el mejor?">
Los clientes individuales pueden variar ligeramente en términos de funcionamiento e interfaz de usuario, ya que cada uno lo desarrollan diferentes equipos, utilizando una variedad de lenguajes de programación. Dicho esto, ninguno de ellos es el «mejor». Todos los clientes de producción son excelentes piezas de software, los cuales realizan las mismas funciones fundamentales para sincronizar e interactuar con la cadena de bloques.

Dado que todos los clientes de producción proporcionan la misma funcionalidad básica, es en realidad es muy importante que elija un <strong>cliente minoritario</strong>, esto es, cualquier cliente que NO esté siendo usado actualmente por la mayoría de validadores de la red. Esto puede parecer poco intuitivo, pero el ejecutar un cliente en mayoría o supermayoría aumenta su riesgo de sufrir «recortes» en el caso de error en ese cliente. La ejecución de un cliente minoritario limita drásticamente estos riesgos.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Más información sobre por qué la diversidad de clientes es crítica</a>
</ExpandableCard>

<ExpandableCard title="¿Puedo, simplemente, usar un VPS (servidor privado virtual)?">
Aunque un servidor privado virtual (VPS) puede utilizarse en sustitución del hardware doméstico, el acceso físico y la ubicación de su cliente validador <em> sí importa</em>. Las soluciones centralizadas en la nube tales como Amazon Web Services (AWS) o Digital Ocean permiten la conveniencia de no tener que obtener y operar hardware, a expensas de centralizar la red.

Cuantos más clientes validadores se ejecuten en una sola solución centralizada de almacenamiento en la nube, más peligroso será para estos usuarios. Cualquier evento que desconecte a estos proveedores, ya sea por un ataque, por exigencias regulatorias, o simplemente por interrupciones de energía o Internet, ocasionará que cada cliente validador que se base en estos servidores se desconecte al mismo tiempo.

Las penalizaciones por estar fuera de línea son proporcionales a cuántos están fuera de línea al mismo tiempo. El uso de VPS aumenta enormemente el riesgo de que las penalizaciones por estar fuera de línea sean más severas, y aumenta su riesgo de fuga cuadrática o «recorte» en el caso de que la interrupción sea lo suficientemente importante. Para reducir su propio riesgo, y el riesgo para la red, se recomienda encarecidamente a los usuarios obtener y operar su propio hardware.
</ExpandableCard>

<ExpandableCard title="¿Cómo desbloqueo mis recompensas o recupero mis ETH?">

Las retiradas de cualquier tipo de la cadena de baliza requieren que se establezcan credenciales de retirada.

Los nuevos participantes las establecen en el momento de la generación y el depósito de la clave. Los particpipantes existentes que no hayan configurado esta funcionalidad pueden actualizar sus claves para poder utilizarla.

Una vez establecidas las credenciales de retirada, los pagos de recompensa (ETH acumulados por encima de los 32 iniciales) se distribuirán periódica y automáticamente a la dirección de retirada.

Para desbloquear y recibir el saldo completo, también debe completar el proceso de salida de su validador.

<ButtonLink href="/staking/withdrawals/">Más sobre los retiros de Staking</ButtonLink>
</ExpandableCard>

## Para profundizar sobre el tema {#further-reading}

- [El directorio de participación de Ethereum](https://www.staking.directory/), _Eridian y Spacesider_
- [ El problema de la diversidad de clientes de Ethereum](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [Controbuir a la diversidad de clientes](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [Diversidad de clientes en la capa de consenso de Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [Guía: Cómo comprar hardware para un validador de Ethereum](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [Paso a paso: Cómo unirse a la red de prueba de Ethereum 2.0](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Consejos para la prevención de «recortes» de Eth2](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raúl Jordan 2020_

<QuizWidget quizKey="staking-solo" />
