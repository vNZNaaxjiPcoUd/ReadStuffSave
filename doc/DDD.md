# DDD 概念参考

- [1 通用类概念](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%80%9A%E7%94%A8%E7%B1%BB%E6%A6%82%E5%BF%B5)
   - [1.1 领域驱动设计（DDD）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1ddd)
   - [1.2 模型（Model）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%A8%A1%E5%9E%8Bmodel)
   - [1.3 建模（Modeling）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%BB%BA%E6%A8%A1modeling)
   - [1.4 模型驱动设计（Model-Driven Design）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%A8%A1%E5%9E%8B%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1model-driven-design)
   - [1.5 软件设计（The Software Design）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1the-software-design)
   - [1.6 战略设计（Strategic Design）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%88%98%E7%95%A5%E8%AE%BE%E8%AE%A1strategic-design)
   - [1.7 战术设计（Tactical design）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%88%98%E6%9C%AF%E8%AE%BE%E8%AE%A1tactical-design)
   - [1.8 软件（Software）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%BD%AF%E4%BB%B6software)
   - [1.9 原则（Principle）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%8E%9F%E5%88%99principle)
   - [1.10 通用语言（Ubiquitous）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%80%9A%E7%94%A8%E8%AF%AD%E8%A8%80ubiquitous)
   - [1.11 聚焦核心域（Focus）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%81%9A%E7%84%A6%E6%A0%B8%E5%BF%83%E5%9F%9Ffocus)
   - [1.12 协作共创（Collaboration）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%8D%8F%E4%BD%9C%E5%85%B1%E5%88%9Bcollaboration)
   - [1.13 持续建模（Continuous）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%8C%81%E7%BB%AD%E5%BB%BA%E6%A8%A1continuous)
   - [1.14 上下文（Context）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%B8%8A%E4%B8%8B%E6%96%87context)
- [2 领域分析类概念](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E5%88%86%E6%9E%90%E7%B1%BB%E6%A6%82%E5%BF%B5)
   - [2.1 问题空间（Problem Space）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%97%AE%E9%A2%98%E7%A9%BA%E9%97%B4problem-space)
   - [2.2 领域（Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9Fdomain)
   - [2.3 子域（Sub Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%AD%90%E5%9F%9Fsub-domain)
   - [2.4 核心域（Core Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%A0%B8%E5%BF%83%E5%9F%9Fcore-domain)
   - [2.5 支撑域（Support Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%94%AF%E6%92%91%E5%9F%9Fsupport-domain)
   - [2.6 通用域（General Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%80%9A%E7%94%A8%E5%9F%9Fgeneral-domain)
- [3 建模类概念](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%BB%BA%E6%A8%A1%E7%B1%BB%E6%A6%82%E5%BF%B5)
   - [3.1 解空间（Solution Space）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%A7%A3%E7%A9%BA%E9%97%B4solution-space)
   - [3.2 领域模型（Model）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8Bmodel)
   - [3.3 限界上下文（ Bounded context）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%99%90%E7%95%8C%E4%B8%8A%E4%B8%8B%E6%96%87-bounded-context)
   - [3.4 实体（Entity）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%AE%9E%E4%BD%93entity)
   - [3.5 值对象（Value Object）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%80%BC%E5%AF%B9%E8%B1%A1value-object)
   - [3.6 聚合（Aggregate）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%81%9A%E5%90%88aggregate)
   - [3.7 聚合根（ Aggregate Root）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%81%9A%E5%90%88%E6%A0%B9-aggregate-root)
- [4 软件设计类概念](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1%E7%B1%BB%E6%A6%82%E5%BF%B5)
   - [4.1 模块（Module）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%A8%A1%E5%9D%97module)
   - [4.2 仓储（Repository）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%BB%93%E5%82%A8repository)
   - [4.3 服务（Service）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%9C%8D%E5%8A%A1service)
   - [4.4 工厂（Factory）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%B7%A5%E5%8E%82factory)
   - [4.5 策略（Strategy）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E7%AD%96%E7%95%A5strategy)
   - [4.6 规格（Specification）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E8%A7%84%E6%A0%BCspecification)
   - [4.7 分层架构（逻辑）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%88%86%E5%B1%82%E6%9E%B6%E6%9E%84%E9%80%BB%E8%BE%91)
   - [4.8 接入层（Interface）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%8E%A5%E5%85%A5%E5%B1%82interface)
   - [4.9 应用层（Application）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%BA%94%E7%94%A8%E5%B1%82application)
   - [4.10 领域层（Domain）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E5%B1%82domain)
   - [4.11 基础设施层（Infrastructure）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E5%B1%82infrastructure)
   - [4.12 部署架构（物理）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%83%A8%E7%BD%B2%E6%9E%B6%E6%9E%84%E7%89%A9%E7%90%86)
   - [4.13 微服务（Micro Service）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%BE%AE%E6%9C%8D%E5%8A%A1micro-service)
   - [4.14 单体（Monomer）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%8D%95%E4%BD%93monomer)
   - [4.15 分布式应用系统（Distributed）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%88%86%E5%B8%83%E5%BC%8F%E5%BA%94%E7%94%A8%E7%B3%BB%E7%BB%9Fdistributed)
- [5 事件风暴类概念](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%BA%8B%E4%BB%B6%E9%A3%8E%E6%9A%B4%E7%B1%BB%E6%A6%82%E5%BF%B5)
   - [5.1 事件风暴（Event Storming）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%BA%8B%E4%BB%B6%E9%A3%8E%E6%9A%B4event-storming)
   - [5.2 领域事件（Domain Event）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E4%BA%8B%E4%BB%B6domain-event)
   - [5.3 业务规则（Policy）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99policy)
   - [5.4 命令（Command）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%91%BD%E4%BB%A4command)
   - [5.5 执行者（Actor）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%89%A7%E8%A1%8C%E8%80%85actor)
   - [5.6 用户（User）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E7%94%A8%E6%88%B7user)
   - [5.7 外部系统（Out System）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%A4%96%E9%83%A8%E7%B3%BB%E7%BB%9Fout-system)
   - [5.8 本系统（System）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%9C%AC%E7%B3%BB%E7%BB%9Fsystem)
   - [5.9 定时器（Timer）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%AE%9A%E6%97%B6%E5%99%A8timer)
   - [5.10 参与人（Participants）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E5%8F%82%E4%B8%8E%E4%BA%BAparticipants)
   - [5.11 领域专家（Domain Expert）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E9%A2%86%E5%9F%9F%E4%B8%93%E5%AE%B6domain-expert)
   - [5.12 技术专家（Tech Expert）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E6%8A%80%E6%9C%AF%E4%B8%93%E5%AE%B6tech-expert)
   - [5.13 主持人（Facilitator）](https://domain-driven-design.org/zh/ddd-concept-reference.html#%E4%B8%BB%E6%8C%81%E4%BA%BAfacilitator)

![](https://domain-driven-design.org/zh/ddd-concept-reference/concept-map-hd.png)

DDD 基本概念图

# 1 通用类概念

## 1.1 领域驱动设计（DDD）

**DDD 是 Domain-Driven Design 的缩写，是 Eric Evans 于 2004 年提出的一种软件设计方法和理念。**

其主要的思想是，利用确定的业务模型来指导业务与应用的设计和实现。主张开发人员与业务人员持续地沟通和模型的持续迭代式演化，以保证业务模型与代码实现的一致性，从而实现有效管理业务复杂度，优化软件设计的目的。

## 1.2 模型（Model）

**通常，模型是对对象、人或系统的信息表示。它通过较为简单的信息结构来代表我们需要理解的复杂事物或系统。**

地图、乐高、算筹都是模型，模型可以简化复杂事务的认知。我们天生就有用简单的东西代表另外一个东西的能力，比如幼儿园数数用的竹签，学习物理时的刚体、真空中的球形鸡，都是模型。通俗来说模型就是经验的抽象集合，平时听到的谚语、公式、定理，本质上都是一种模型。

## 1.3 建模（Modeling）

**建模是构建模型的过程。**

在软件设计过程中，通过分析业务，将业务需求使用合适的模型表示出来，是建模的任务。模型可以作为业务分析的产出，并作为软件设计的重要理论基础。 比如在分析一个电商应用的业务时，抽象出订单、商品等概念，进一步定义出模型，并用合适的图例表达，往往是 UML 来表达。

## 1.4 模型驱动设计（Model-Driven Design）

**面向模型的分析设计方法，优先通过识别模型来简化业务设计。**

在设计过程中，以模型为中心，始终维护模型，并基于此指导软件设计。

## 1.5 软件设计（The Software Design）

**软件设计软件需求出发，对软件系统的整体结构、模块做出划分和规划，以便于具体代码的顺利编写。**

由于软件需求具有非结构化、准确的语义，软件设计往往通过经验完成，无法通过某种特定的推理路线严格推导实现。

## 1.6 战略设计（Strategic Design）

**战略设计也称为战略建模，是指对业务进行高层次的抽象和归类。主要手段包括理清上下文和进行子域的划分。**

战略设计关注模型的分离，其解决的问题是大的模型如何划分为小模型以及相互之间如何关联。战略设计的产出可以用于指导团队协作，使得规模巨大的软件可以被合理拆分。

战略设计的产出通常为上下文图，以及模块或微服务划分。

## 1.7 战术设计（Tactical design）

**战术设计也称为战术建模，是指对特定上下文下的模型进行详细设计。**

战术设计的对象包括聚合、实体和值对象，其目标是用明确它们是什么以及相互之间有何关系。战术设计的产出可以是用 UML 表达的类图，需要细化到具体的属性，同时确保在代码级别可实现。

## 1.8 软件（Software）

**DDD 讨论下的软件是指，用于解决具体业务问题的计算机程序，既可以是单体也可以是分布式系统。**

软件设计是 DDD 的最终目的，使用 DDD 的各种工具可以指导软件设计，最终构建出健壮、容易维护的软件。

## 1.9 原则（Principle）

**为了更好的践行 DDD，需要遵守几个原则: 通用语言、聚焦核心域、协作共创和持续建模。**

这些原则是为了更好地服务业务，从业务驱动模型设计。

## 1.10 通用语言（Ubiquitous）

**通用语言（Ubiquitous language）是指在软件设计中，业务人员和开发人员需要使用无歧义的统一语言来对话。**

这些语言包括对概念的统一理解和定义，以及业务人员参与到软件建模中，否则业务的变化会造成软件巨大的变化。

## 1.11 聚焦核心域（Focus）

**核心域就是最关键的业务逻辑，聚焦核心域决定了软件的定位和投资重心。**

## 1.12 协作共创（Collaboration）

**协作共创是指领域专家和业务专家共同建模。**

## 1.13 持续建模（Continuous）

**持续建模是指模型需要随业务变化而被及时更新。**

## 1.14 上下文（Context）

**上下文是语言学科的概念，指不同语境下的概念虽然相同的用词，可能具有不同的含义。**

在软件设计中，因为自然语言的原因，相同的用词导致实际是不同概念，会对建模和软件设计带来误导。同时，不同的上下文也是识别模型边界的手段。

# 2 领域分析类概念

## 2.1 问题空间（Problem Space）

**待解决的业务问题的集合。**

在 DDD 实践中，我们应该明确区分问题空间和解空间，避免混为一谈。

## 2.2 领域（Domain）

**领域（Domain）是业务相关知识的集合。**

通俗来说，领域就是业务知识。业务有一些内在规则，存在专业性，比如财务、CRM、OA、电商等不同领域的业务规则不同。计算机只是业务规则的自动化。

## 2.3 子域（Sub Domain）

**一个子域是领域的一部分。**

为了降低业务理解复杂度，DDD 实践中通常将领域划分为子域，通过分而治之的方法分析问题。

## 2.4 核心域（Core Domain）

**核心域是指领域中最核心的部分，通常对应企业的核心业务**

核心域需要我们投入最大精力，进行充分的分析。因为它是一个企业能运转的基础。

## 2.5 支撑域（Support Domain）

**支撑域是一种特殊的子域，是指为了实现核心业务而不得不开发的业务所对应的相关知识的集合。**

例如，活动平台业务属于电商的支撑域，因为该业务对于电商企业并不是必需的，其存在的意义仅在于放大利润。

## 2.6 通用域（General Domain）

**通用域是另一种特殊的子域，对应的是业界已经有成熟方案的业务。**

通用域可以看做一种特殊的支撑域，可以使用标准部件来实现，短信通知、邮件等领域问题。

# 3 建模类概念

## 3.1 解空间（Solution Space）

**解空间是一个数学概念。是指满足问题的所有约束前提下，所有可行解的集合。在 DDD 的上下文中，指的是所有可能的解决方案的集合。**

解空间是相对问题空间存在的，认识到解空间存在的好处是解空间可以通过一些方法从问题空间导出，而不是通过猜测得出的。

## 3.2 领域模型（Model）

**领域模型（Model）是业务概念在程序中的一种表达方式。**

领域模型可以用来设计和理解整个软件结构。面向对象设计中的类概念是领域模型的一种表达方式。与此类似，UML的建模方法也可以应用在对领域模型的表达上。在 DDD 实践中，领域模型应当尽量简洁，能反应业务概念即可。

## 3.3 限界上下文（ Bounded context）

**限界上下文是有明确边界的上下文。在 DDD 实践中领域模型会被限定在限界上下文当中。**

限界上下文强调概念的一致性。虽然传统的方法学已经在追求概念的一致性，但是忽略了系统的庞大性，不论系统多庞大，在系统任何位置同一概念通用。DDD 不追求全局的一致性，而是将系统拆成多块，在相同的上下文中实现概念一致性。

识别上下文可以从概念的二义性着手，比如商品的概念在物流、交易、支付含义完全不一样，但具有不同内涵和外延，实际上他们处在不同上下文。

界限上下文可以用于微服务划分、避免模型的不正确复用带来的问题。

## 3.4 实体（Entity）

**实体（Entity）是在相同限界上下文中具有唯一标识的领域模型，可变，通过标识判断同一性。**

## 3.5 值对象（Value Object）

**值对象 （Value Ojbect）是一种特殊的领域模型，不可变，通过值判断同一性。**

实体可以使用 ID 标识，但是值对象是用属性标识，任何属性的变化都视为新的值对象。比如一个银行账户，可以由 ID 唯一标识，币种和余额可以被修改但是还是同一个账户；交易单中的金额由币种和数值组成，无论修改哪一个属性，金额都不再是原来的金额。

## 3.6 聚合（Aggregate）

**聚合（Aggregate）是一组生命周期强一致，修改规则强关联的实体和值对象的集合，表达统一的业务意义。**

聚合的意义在于让业务统一、一致，在面向对象中有非常重要价值。比如，订单中有多个订单项，订单的总价是根据订单项目计算而来的。如果没有经验的开发者直接对订单项的做出修改，而不是由订单统一处理业务逻辑，会造成业务的一致性问题。

聚合需要在相同的上下文中，不能跨上下文。

## 3.7 聚合根（ Aggregate Root）

**聚合根（ Aggregate Root）是聚合中最核心的实体，其他的实体和值对象都从属于这个实体。**

要管理聚合必须使用一个聚合根，然后使用聚合根来实现发现、持久化聚合的作用，完成统一的业务意义。一个聚合中有且只有一个聚合根，聚合也可以只有一个单独的实体。

# 4 软件设计类概念

## 4.1 模块（Module）

**模块（Module）一组类或者对象组成的集合。**

在 DDD 实践中推荐使用限界上下文和聚合来指导模块划分。同时，如果不是特别复杂的业务逻辑也可以不遵循该模式。

## 4.2 仓储（Repository）

**仓储（Repository）是以持久化领域模型为职责的类。**

仓储的目的是屏蔽业务逻辑和持久化基础设施的差异。例如，对于同样的持久化业务需求，在采用关系型数据库和非关系型数据库作为存储基础设施时的实现细节是有所不同的。

软件的设计往往是围绕着对数据的修改完成的。经验不多的开发者往往会认为，软件的开发过程就是对数据库的增删改查。但实际上基于该认知的软件设计让软件难以维护。

对于采用关系数据库作为存储基础设施的项目，仓库层可以被 ORM 实现。若不使用 ORM，则需自己实现仓库。

## 4.3 服务（Service）

**服务（Service）是领域模型的操作者，负责领域内的业务规则的实现。**

领域模型用于承载数据和系统状态，服务承载业务逻辑的实践。

在实践中如果使用主、客体的思维来进行设计，则服务为主体，领域模型为客体。使用拟人化的方式来对服务进行命名，可以让开发者更容易理解。比如，一个维护客户数据的 CRM 应用中，客户数据被抽象为模型： Client，对应的服务可以设计为：ClientManager。

## 4.4 工厂（Factory）

**工厂（Factory）是以构建领域模型（实体或值对象）为职责的类或方法。**

工厂可以利用不同的业务参数构建不同的领域模型。对于简单的业务逻辑实现可以不使用工厂。工厂的实现不一定是类的形式，也可以是具备工厂功能的方法。

在面向对象程序设计中，工厂是一种设计模式。在广义的工厂模式中，工厂可以根据不同的规则的业务需求构造不同的对象。例如在 Redis 连接客户端的实现中，可以使用 Redis 单机、哨兵、集群等不同的方式来构建 Redis 连接客户端。

## 4.5 策略（Strategy）

**策略（Strategy）是业务规则的实现方式。**

例如通知业务，可以使用不同的渠道来实现，不同渠道的实现逻辑可以认为是不同的策略。 在面向对象程序设计中，策略模式也是一种设计模式，是多态的一种实现模式。

策略通常会搭配着接口来设计。如果说接口是一种契约，那策略就是契约的履约方式。

## 4.6 规格（Specification）

**规格（Specification） 是一些特殊的业务规则。通常表现为用于校验（e.g. 数据格式，业务逻辑）、查询和搜索条件。**

在实践中，规格既可以被设计为灵活的查询或校验条件，也可以被抽象出来以便复用。

例如，在 JPA、MongoDB、ElastiSearch和一些具有查询能力的 ORM 都大量使用这种设计方式，同样的在应用程序中我们也可以参考这种设计模式，把业务的规则提取出来。

## 4.7 分层架构（逻辑）

**分层架构是指在软件设计过程中按照既定的原则将不同的功能实现拆分到不同的层级进行实现的一种设计方式。每个层级有独立的职责，多个层次协同以提供完整功能。按照 DDD 的分层模型，通常可以划分为:接入层、应用层、领域层、基础设施层**

分层架构在具体的软件中可以表现为不同的形式。例如，在分布式系统中，不同层级的软件实现，可以表现为独立部署的服务。而在单体系统中，分层可以用不同的模块或包来实现。

分层架构的设计理念与计算机网络的层级结构类似，上层依赖下层的实现，而下层实现无需关心上层实现。例如，HTTP 协议构建在 TCP 协议之上，TCP 协议只负责提供传输层的能力，而不需要知道具体的应用层协议。

分层架构中层级的数量需要依照系统复杂度来定，并不需要死板地按照 DDD 推荐的四层来进行设计。在简单的系统中，可以通过减少分层来避免样板代码，减少冗余。例如，在 web 系统中有时候只有一种接入方式，接入层和应用层能力高度重叠，可以考虑直接使用应用层代替接入层。

软件框架的使用，通常会引入新的层级，从而影响系统整体的分层架构。例如，ORM 框架本身就提供了对 Repository 的一层抽象。

## 4.8 接入层（Interface）

**接入层负责的是系统的输入和输出。**

接入层只关心沟通协议，不关心业务相关的数据校验。 接入层的实现是与业务应用强相关的，不同的业务应用有不同的实现方式。例如，对于普通的 Web 应用，基于 HTTP 协议的 API 是一种接入层实现方式；对于IoT传感器的数据上传业务，接入层的实现可能需要基于 websocket 或 MQTT 协议。

接入层的特点：

- 接入层对应用数据透明，只关心数据格式而不关心数据的内容
- 在大部分单体系统中接入层通常被框架实现。例如，在 Spring Boot 框架中，HTTP 协议的 API 设计不需要关注 HTTP 协议本身。
- 在分布式系统中接入层通常被网关实现。

## 4.9 应用层（Application）

**应用层，组织业务场景，编排业务，隔离场景对领域层的差异。**

应用层遵循面向对象核心思想中的 “关注点分离” 理念。应用层的关注点在于业务场景的处理。例如，对于一个服务多种类型用户的应用，to C 的网页界面和后台管理界面对应的是不同的业务场景。对于新用户注册这个业务来说，通过 to C 的网页注册和通过后台管理界面进行后台注册是不同的业务场景。然而，“用户注册”在系统层面的基本逻辑是一样的。所以，“用户注册”的基本业务逻辑可以交由领域层来实现。而两种不同渠道进行用户注册所需要进行的身份验证等逻辑，可以设计在应用层进行实现。这样便能达到关注点分离，复用核心业务逻辑的目的。

应用层的特点：

- 关心处理完一个完整的业务
- 该层只负责业务编排，对象转换，而具体的业务逻辑由领域层实现
- 虽不关心请求从何处来，但关心谁来、做什么、有没有权限做
- 利用不同的领域服务来解决问题
- 对最终一致性有要求的业务和事务处理需要放到应用层来处理
- 功能权限放到这层

## 4.10 领域层（Domain）

**领域层，实现具体的业务逻辑、规则，为应用层提供无差别的服务能力。**

实际处理业务的地方，领域层需要对应用层提供无差别的服务和能力。例如，对于用户注册的场景，用户既可以通过邮箱自己注册，也可以由管理员在后台进行添加。用户注册的核心逻辑可以由领域层完成，但是对于不同渠道进行用户注册的参数校验和权限验证等逻辑则由应用层实现。

领域层的特点：

- 不关心场景，关心模型完整性和业务规则
- 不关心谁来，不关心场景完整的业务，关心当前上下文的业务完整
- 强一致性事务放到这层，聚合的事务是 “理所当然的”
- 对应到分布式系统中的 domain service、后台等概念
- 领域层做业务规则验证
- 数据权限放到这层（比如只允许删除自己创建的商品），因为数据权限涉及业务规则
- 根据业务情况，参考反范式理论，跨上下文使用值对象做必要的数据冗余

## 4.11 基础设施层（Infrastructure）

**基础设施层，提供具体的技术实现，比如存储，基础设施对业务保持透明。**

对于基础设施层来说，基础设施层并不是指 MySQL、Redis 等外部组件，而是外部组件的适配器，Hibernate、Mybatis、Redis Template 等，因此在 DDD 中适配器模式被多次提到，基础设施层往往不能单独存在，还是要依附于领域层。技术设施层的适配器还包括了外部系统的适配，互联网产品系统的外部系统非常多，常见的有活体监测、风控系统、税务发票等。

技术设施层的特点：

- 关心存储、通知、第三方系统等外部设施（防腐层隔离）
- 基础设施的权限由配置到应用的凭证控制，例如数据库、对象存储的凭证，技术设施层不涉及用户的权限

## 4.12 部署架构（物理）

**部署架构是指具体的架构实现**

主要是在分布式系统、单体系统，甚至在客户端软件中体现。

把逻辑架构和部署架构区分开可以很好的理解软件设计上和部署上的不同，对于应用构架来说，逻辑上的设计不一定对应部署结构。

这样就很好理解 DDD 在不同场合中的使用方式，避免生搬硬套。当 DDD 的分层结构在单体应用中使用时，每层可能使用包、模块来表达，在微服务中使用时候，每层可能由不同角色的微服务来完成。

## 4.13 微服务（Micro Service）

**微服务是一种低耦合的分布式应用系统。**

维基百科的定义是：一种软件开发技术 - 面向服务的体系结构（SOA）架构样式的一种变体，将应用程序构造为一组松散耦合的服务。这个定义没有问题，但是忽略了一个重要的信息，微服务是一种分布式架构，微服务必须面对分布式系统的各种问题。

分布式系统是通过计算机网络连接、协同工作的 IT 系统，因此在使用 DDD 时候，需要为这种系统做适配，而不是简单的做出切分。

## 4.14 单体（Monomer）

**单体是主要业务实现和部署在单一服务器上的应用。**

单体系统是相对于微服务来说的，其特点是主要的实现在单一的服务器中。

## 4.15 分布式应用系统（Distributed）

**分布式应用系统是建立在计算机网络之上的应用软件系统，不同单元通过计算机网络集成。**

# 5 事件风暴类概念

## 5.1 事件风暴（Event Storming）

**事件风暴是一种以工作坊的形式，使用 DDD 建模的方式。**

事件风暴的发明人是 Alberto Brandolini ，它来源于 Gamestorming，通过工作坊的方式将领域专家和技术专家拉到一起，进行建模。

事件风暴是一种捕获行为需求的方法，类似传统软件的开发用例分析。所有人员（领域专家和技术专家） 对业务行为进行一次发散，并最终收敛达到业务的统一。

## 5.2 领域事件（Domain Event）

**事件是系统状态发生的某种客观现象，领域事件是和领域有关的事件。**

领域事件（Domain Event），是在业务上真实发生的客观事实，这些事实对系统会产生关键影响，是观察业务系统变化的关键点。领域事件一般是领域专家关心的。

事件的评价方式是系统状态是否发生变化。系统状态变化意味着领域模型被业务规则操作，这是观察系统业务的好方法。

识别领域事件的线索有：

1. 是否产生了某种数据
2. 系统状态是否发生变化，无论这种状态存放到数据库还是内存
3. 是否对外发送了某些消息

## 5.3 业务规则（Policy）

**业务规则是指对业务逻辑的定义和约束。**

不同的业务规则往往意味着不同的领域事件被触发，未来在技术实现时可能是一些分支条件，对应 DDD 实现中可能通过领域服务、规格、策略等方式实现。

业务规则的识别是为了将数据和算法分开。

## 5.4 命令（Command）

**命令是执行者发起的操作，构成要件是执行者和行为。**

命令可以类比于 UML 分析中的业务用例，是某个场景中领域事件的触发动作。

## 5.5 执行者（Actor）

**执行者是指使用系统的主体，是导致系统状态变化的触发源。**

执行者有点像 UML 的涉众，不过区别是执行者不仅是用户，还包括外部系统和本系统。 在事件风暴中，执行者可以是：用户、外部系统、本系统、定时器。

## 5.6 用户（User）

**用户是执行者的一种，是指使用软件或服务的人。**

用户可以有不同的角色，通常我们会把不同角色的相似行为作为不同的命令来处理，有可能得到同样的事件。比如系统出现了商品已添加的事件，有可能有多个触发的场景： 1. 系统管理员在后台中添加 2. 商户在自己的管理平台中添加 3. 导入任务在特定时间添加

1 2 是用户的行为，不过是不同的角色。

## 5.7 外部系统（Out System）

**外部系统是执行者的一种，系统开放 API 的调用发起者。**

有一些系统会提供对外的 API 给外部系统，这时候外部系统也会发出命令让系统产生事件，这里的外部系统特指作为执行者的外部系统。

## 5.8 本系统（System）

**本系统是执行者的一种，指系统本身。**

事件的触发可以由用户、外部系统、定时器触发，也可以由上一个事件触发，因此这里的触发者（主体）就是系统本身。

## 5.9 定时器（Timer）

**定时器是执行者的一种，通常是定时任务。**

定时器可以作为执行者，不过需要区别于本系统这个触发源。定时器可以看待为外部一个时间信号源，类似于计算机中主机中的振荡器。

## 5.10 参与人（Participants）

**作为工作坊的参与人员（应区别于执行者）。**

参与人只是一种角色，而非具体的一个人，可以是多个自然人做群体参与，也可以一人分饰不同的角色。

在开始工作坊之前，参与人需要满足一些条件：

1. 参与人需要对解决的问题和产出目标达成共识
2. 参与人需要 DDD 的基本知识或接受过基本培训
3. 领域专家、技术专家需要能全程参加

## 5.11 领域专家（Domain Expert）

**领域专家是指熟悉业务规则的人，在工作坊中一般是能敲定业务规则的人。**

在实际的事件风暴工作坊中，领域专家是一个比技术专家更难获得人，一个合格的、能让工作坊进展下去的领域专家需要有几个要求：

1. 了解现有业务个情况
2. 能对具体的业务方向做出结论性的输出

在做工作坊时，需要分清现状（As-IS）和目标（To-Be）业务，现状业务很多人都能说出来，不过真正的领域专家是能对目标业务做出描述的人。

## 5.12 技术专家（Tech Expert）

**技术专家是指熟悉技术方案和实现方式的人，能给出可行的技术方案和了解基础设计的限制条件。**

技术专家需要能对现有的技术做出描述，而未来的技术选型可能是动态的，能有一定预见性最好。技术专家往往是当前团队中最熟悉架构和代码的人。

## 5.13 主持人（Facilitator）

**主持人工作坊流程的推动者，以及 DDD 方法论的守护者。**

在一些工作坊中，主持人往往是外部的咨询师，他们有大量的实践经验，需要能对 DDD 的概念、方法有成体系的研究，并能推动工作坊进行。