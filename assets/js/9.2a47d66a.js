(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{250:function(t,e,a){t.exports=a.p+"assets/img/zegami-2.bea8693b.gif"},251:function(t,e,a){t.exports=a.p+"assets/img/zegami-3.78fb1690.gif"},252:function(t,e,a){t.exports=a.p+"assets/img/zegami-1.3b35c73b.jpg"},318:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.zegami.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zegami"),s("OutboundLink")],1),t._v(" makes information more visual and accessible, enabling intuitive exploration, search and discovery of large data sets. Zegami combines the power of machine learning and human pattern recognition to reveal hidden insights and new perspectives.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(250),alt:"imagesearch"}}),t._v(" "),s("br"),t._v(" "),s("em",[t._v("image search on Zegami")])]),t._v(" "),s("p",[t._v("It provides a more powerful tool for visual data than what’s possible with spreadsheets or typical business intelligence tools. By presenting data within a single field of view, Zegami enables users to easily discover patterns and correlations. Facilitating new insights and discoveries that would otherwise not be possible.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(251),alt:"metadatasearch"}}),t._v(" "),s("br"),t._v(" "),s("em",[t._v("metadata search on Zegami")])]),t._v(" "),s("p",[t._v("For Zegami to shine, our users need to be able to easily import their data so they can get actionable insight with minimal fuss. In building an analytics platform we face the unique challenge of having to support a wide variety of data sources and formats. The challenge is compounded by the fact that the data we deal with is rarely clean.")]),t._v(" "),s("p",[t._v("At the onset, we also faced the challenge of how best to store and transmit data between our components and micro-services. In addition to an open, extensible and simple yet powerful data format, we wanted one that can preserve data types and formatting, and be parsed by all the client applications we use, which includes server-side applications, web clients and visualisation frameworks.")]),t._v(" "),s("p",[t._v("We first heard about messytables"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v(" and of the data protocols site (currently Frictionless Data Specifications"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v(") through a lightning talk at EuroSciPy 2015. This meant when we searched for various things around jsontableschema (now tableschema"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])]),t._v("), we landed on the Frictionless Data project.")]),t._v(" "),s("p",[t._v("We are currently using the specifications in the following ways:")]),t._v(" "),s("ul",[s("li",[t._v("We use tabulator.Stream"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])]),t._v(" to parse data on our back end.")]),t._v(" "),s("li",[t._v("We use schema infer from tableschema-py"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn5",id:"fnref5"}},[t._v("[5]")])]),t._v(" to store an extended json table schema to represent data structures in our system. We are also developing custom json parsers using json paths and the ijson library")])]),t._v(" "),s("p",[t._v("In the coming days, We plan on using")]),t._v(" "),s("ul",[s("li",[t._v("datapackage-pipelines"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn6",id:"fnref6"}},[t._v("[6]")])]),t._v(" as a spec for the way we treat joins and multi-step data operations in our system")]),t._v(" "),s("li",[t._v("tabulator in a polyglot persistence scenario"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn7",id:"fnref7"}},[t._v("[7]")])]),t._v(" - storing data in both storage buckets and either elasticsearch"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn8",id:"fnref8"}},[t._v("[8]")])]),t._v(" or another column store like "),s("a",{attrs:{href:"http://druid.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("druid.io"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(252),alt:"Diagram"}})]),t._v(" "),s("p",[t._v("Moving forward it would be interesting to see tableschema and tabulator as a communication protocol over websockets. This would allow for a really smooth experience when using handsontable"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn9",id:"fnref9"}},[t._v("[9]")])]),t._v(" spreadsheets with a datapackage of some kind. A socket-to-socket version of datapackage-pipelines which runs on container orchestration systems would also be interesting. There are few protocols similar to datapackage-pipelines, such as Dask"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn10",id:"fnref10"}},[t._v("[10]")])]),t._v(" which, although similar, is not serialisable and therefor unsuitable for applications where front end communication is necessary or where the pipelines need to be used by non-coders.")]),t._v(" "),s("p",[t._v("We are also keen to know more about repositories around the world that use datapackages"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn11",id:"fnref11"}},[t._v("[11]")])]),t._v(" so that we can import the data and show users and owners of those repositories the benefits of browsing and visualising data in Zegami.")]),t._v(" "),s("p",[t._v("In terms of other potential use cases, it would be useful to create a python-based alternative to the dreamfactory API server"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn12",id:"fnref12"}},[t._v("[12]")])]),t._v(". ["),s("a",{attrs:{href:"http://wq.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("wq.io"),s("OutboundLink")],1),t._v("][wqio] is one example, but it is quite hard to use and a lighter version would be great. Perhaps CKAN"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn13",id:"fnref13"}},[t._v("[13]")])]),t._v(" datastore could be licensed in a more open way?")]),t._v(" "),s("p",[t._v("In terms of the next steps for us, we are currently working on a SaaS implementation of Zegami which will dramatically reduce the effort required in order to start working with Zegami. We are then planning on developing a series of APIs so developers can create their own data transformation pipelines. One of our developers, Andrew Stretton, will be running Frictionless Data sessions at PyData London"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn14",id:"fnref14"}},[t._v("[14]")])]),t._v(" on Tuesday, October 3 and PyCon UK"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn15",id:"fnref15"}},[t._v("[15]")])]),t._v(" on Friday, October 27.")]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[t._v("Library for parsing messy tabular data: "),s("a",{attrs:{href:"https://github.com/okfn/messytables",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/okfn/messytables"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[t._v("Frictionless Data Specifications: "),s("a",{attrs:{href:"/specs"}},[t._v("/specs")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[s("p",[t._v("Table Schema: "),s("a",{attrs:{href:"/specs/table-schema"}},[t._v("/specs/table-schema")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[s("p",[t._v("Tabulator:  library for reading and writing tabular data "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tabulator-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tabulator-py"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[s("p",[t._v("Table Schema Python Library: "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-py"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[s("p",[t._v("Data Package Pipelines: "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-pipelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-pipelines"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[s("p",[t._v("Polyglot Persistence: "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Polyglot_persistence",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Polyglot_persistence"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[s("p",[t._v("Elastic Search: "),s("a",{attrs:{href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/products/elasticsearch"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[s("p",[t._v("Handsontable: Javascript spreadsheet component for web apps: "),s("a",{attrs:{href:"https://handsontable.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://handsontable.com"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref9"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[s("p",[t._v("Dask Custom Graphs: "),s("a",{attrs:{href:"http://dask.pydata.org/en/latest/custom-graphs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://dask.pydata.org/en/latest/custom-graphs.html"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref10"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn11"}},[s("p",[t._v("Data Packages: "),s("a",{attrs:{href:"/data-packages"}},[t._v("/data-packages")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref11"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn12"}},[s("p",[t._v("Dream Factory: "),s("a",{attrs:{href:"https://www.dreamfactory.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.dreamfactory.com/"),s("OutboundLink")],1),s("br"),t._v("\n[wqio]: "),s("a",{attrs:{href:"https://wq.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wq.io/"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref12"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn13"}},[s("p",[t._v("CKAN: Open Source Data Portal Platform: "),s("a",{attrs:{href:"https://ckan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ckan.org"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref13"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn14"}},[s("p",[t._v("PyData London, October 2017 Meetup: "),s("a",{attrs:{href:"https://www.meetup.com/PyData-London-Meetup/events/243584161/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.meetup.com/PyData-London-Meetup/events/243584161/"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref14"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn15"}},[s("p",[t._v("PyCon UK 2017 Schedule: "),s("a",{attrs:{href:"http://2017.pyconuk.org/schedule/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://2017.pyconuk.org/schedule/"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref15"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);