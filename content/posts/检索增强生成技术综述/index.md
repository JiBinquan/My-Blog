+++
title = '检索增强生成技术综述'
date = 2024-06-13T20:13:51+08:00
draft = false

tags=["研究","RAG"]

+++



## 摘要

近年来，随着大语言模型（如GPT）的发展，人工智能在自然语言处理领域取得了显著进展。然而，这些模型在实际应用中面临幻觉问题、知识注入困难和应用落地困难等挑战。为了克服这些问题，检索增强生成技术（Retrieval-Augmented Generation, RAG）应运而生。RAG通过结合外部数据和生成模型，提高了回答的准确性和实时性。本文综述了RAG技术的发展，包括其基本流程框架、评估方法以及在不同应用场景中的表现，并展望了其未来发展方向和潜在改进。 

## Abstract

In recent years, with the development of large language models (such as GPT), artificial intelligence has made significant advances in the field of natural language processing. However, these models face challenges in practical applications, such as hallucinations, difficulty in knowledge integration, and challenges in implementation. To address these issues, Retrieval-Augmented Generation (RAG) technology has emerged. RAG enhances the accuracy and timeliness of responses by combining external data with generative models. This paper reviews the development of RAG technology, including its basic workflow framework, evaluation methods, and performance in various application scenarios. It also discusses future development directions and potential improvements.

## 一、引言

​		近年来，随着GPT[1]等语言模型的出现，人工智能在自然语言处理领域取得了显著进展。这些模型展示了卓越的语言理解和生成能力，能够在多项人类评估基准上超越人类表现。然而，这些先进的语言模型在实际应用中仍然面临诸多挑战，需要进一步研究和改进。幻觉问题、知识注入困难和应用落地困难就是其中十分典型的难题。

​		1.**幻觉问题**：大语言模型常常会产生“幻觉”问题，即生成的回答看似合理但实际上完全不准确。这种问题不仅影响模型的可信度，还可能导致严重的误导信息传播。因此，如何让模型在面对未知问题时避免生成错误信息，成为当前研究的重点。

​		2.**知识注入困难**：传统的通过训练来注入知识的方法，在构建专业性强、时效性高的大模型时面临诸多挑战。例如，长尾知识难以有效整合；对于需要频繁更新的数据，反复训练会消耗大量计算资源；而对于保密或隐私数据，由于数据泄露的风险，这些数据通常无法用于模型训练。这样一来，模型在这些领域的表现可能会大打折扣。

​		3.**应用落地困难**：对于持有独家数据且需要定制大模型的用户，通过训练或微调方式定制大模型所需的数据量和计算资源可能难以承受。

 <p align="center"></p>



<div align="center">​                         <img src="pic/未命名绘图-第 12 页.drawio (1).png" alt="未命名绘图-第 12 页.drawio (1)" style="zoom: 23%;" />      
</div>



<p align="center"><b>图1 ChatGPT结合RAG技术解决问题的一个示例</b></p>

​		为了克服这些挑战，使大语言模型在更多、更专业的领域中得到有效利用，检索增强生成技术（Retrieval-Augmented Generation, RAG）应运而生。RAG技术通过检索外部数据来补充模型知识，以响应用户查询，确保生成的内容更加准确和实时。通过将事实性知识与大语言模型的训练参数分离，RAG技术巧妙地结合了生成模型的强大功能和检索模块的灵活性，提供了一种有效解决方案，以应对纯参数化模型中知识不完整和不充分的问题。图1是ChatGPT结合RAG技术解决问题的一个示例，可以看出RAG补充了大语言模型自身所没有的知识。

​		自2020年由Lewis等人提出以来[2]，RAG技术已经取得了显著进展。本文旨在对检索增强生成技术进行简单综述。首先，介绍RAG技术的基本流程框架，包括数据预处理、检索、检索后处理和生成四个关键环节。接着，详细讨论RAG技术的评估方法，分析其在不同应用场景中的表现。最后，展望未来RAG技术的发展方向，探讨可能的改进和新兴应用领域。



## 二、RAG 流程框架

​		检索增强生成系统通过结合外部实时事实信息和检索模型来补充大语言模型的知识库。RAG系统主要由两个核心模块组成：检索器和生成器。检索器负责从预构建的数据存储中搜索相关信息，而生成器则根据检索结果生成内容。对于基于查询的RAG系统，其核心在于高效的搜索机制，这是生成高质量结果的关键。

​		从整体流程来看，RAG的处理流程可以分为四个主要阶段：数据预处理、检索、检索后处理和生成。这一流程允许将不同领域的专业知识通过特定的检索方法融入到不同的语言模型中，使RAG系统既灵活又具有扩展性，能够适应各种应用需求。图2展示了RAG技术的基本处理流程和增强方法。

​		在实际应用中，RAG技术确实遵循这一基本框架。例如，LangChain[3]、LlamaIndex[4]和Piperag[5]等平台已经将RAG方法模块化处理。尽管这些平台在具体实现上存在差异，但它们都遵循RAG的基本工作流程。



<div align="center">                        <img src="pic/未命名绘图-第 13 页.drawio.png" alt="未命名绘图-第 13 页.drawio" style="zoom: 23%;" />      
</div>

  <p align="center"><b>图2 RAG技术的基本处理流程和增强方法</b></p>



### 2.1 数据预处理

​		高质量的检索是RAG系统能够输出准确回答的关键，而检索预处理则是确保检索有效性的基础。检索预处理通常包括三个主要方面：数据处理、索引构建和查询处理。

#### 2.1.1 数据处理

​		数据处理是在检索之前对数据进行改进，以提高检索的准确性和效率。此过程包括删除不相关信息、消除歧义、更新过时文档、增加附加信息以及合成新数据等。Xia等提出的LESS[6]算法通过分析梯度信息，策略性地选择最佳数据集，提升了模型微调性能。UPRISE[7]通过自动检索预构建提示池中的提示，优化零样本任务输入的数据处理，提升了生成模型性能。GENREAD[8]采用基于聚类的提示方法，通过将问题转化为文档并对它们进行聚类以排除不相关数据，丰富输入的上下文见解。

#### 2.1.2 索引构建

​		索引构建是保证高效检索的重要手段。合适的索引策略能够快速准确地检索到最相关的信息。Bevilacqua等的SEAL[9]系统利用压缩的全文子串索引和自回归语言模型，提高了索引构建的效率和检索准确性。Chen等[10]提出的DSI框架利用可微函数生成文档标识符排序列表，显著提升了文本检索的有效性，同时保持了存储效率和端到端检索能力。MEMWALKER系统[11]则通过记忆树结构，打破了大语言模型的上下文窗口限制，提升了索引构建和管理效率。

#### 2.1.3 查询处理

​		查询处理通过修改输入查询，使用户查询更好地匹配索引数据，以增强检索结果的相关性和准确性。Yu等[12]提出了一种基于少样本的生成方法来处理对话查询重写，使语言模型能够有效捕捉任务语法并学会上下文依赖关系。Query2doc[13]和HyDE[14]首先使用查询生成伪文档，然后将该文档作为检索的关键，这样伪文档包含更丰富的相关信息，有助于提高检索结果的准确性。Kim等提出的澄清树（ToC）框架[15]，通过递归构建歧义消解树并生成长形式答案，有效处理了开放域问答中的歧义性问题。KnowledGPT[16] 和 Rewrite-Retrieve-Read [17]通过“思维程序”提示和创新的查询重写技术，引入了查询处理方法。KnowledGPT通过生成代码与知识库交互，将用户查询转换为结构化的搜索命令，而Rewrite-Retrieve-Read使用可训练的紧凑语言模型对查询进行重构，使其更有效地反映用户意图和上下文。

 

### 2.2 检索

​		在RAG系统中，检索过程至关重要。检索内容质量的高低直接影响到大语言模型的上下文学习能力以及生成器的表现。常见的增强RAG系统检索能力的方法有检索器微调和递归检索。

#### 2.2.1 检索器微调

​		一个高质量的嵌入模型能够使语义上相似的内容在向量空间中更加接近，从而提升检索效果。通过使用高质量的领域数据或任务相关数据对检索器进行微调，可以显著提升其在特定领域或任务中的表现。例如，REPLUG[18]通过将检索文档预先添加到冻结的黑盒语言模型输入中，利用调优的检索模型显著提升了GPT-3[1]在语言建模上的性能。APICoder[19]使用Python文件和API名称、签名、描述对检索器进行微调，以提高其在编程相关任务中的性能。EDITSUM[20]通过微调检索器以减少检索后摘要之间的Jaccard距离，从而提升摘要的多样性和准确性。

#### 2.2.2 递归检索

​		一种重要的检索策略是递归检索。递归检索通过在检索前将查询拆分，执行多次搜索，以检索更多且质量更高的内容。ReACT[21]采用了思维链[23]（COT）方法，，通过结合推理路径和任务特定行动，提高了模型在语言理解和决策任务中的表现，并有效解决了传统推理方法中幻觉和错误传播的问题。ActiveRAG[22]，利用主动学习机制，将知识构建与认知调节结合，从而优化COT过程并有效辅助生成答案。RATP[24]采用蒙特卡洛树搜索技术进行多阶段决策，每个节点代表一个思路。系统根据这些思路的评分模型反馈指导动作选择，在节点扩展中，通过提示将检索文档和思路合并到语言模型中以生成新的思路。

 

### 2.3 检索后处理

​		RAG系统的检索后处理环节是将检索到的外部文档进行优化、提取和整合，以确保生成答案的准确性、相关性和可信度。这一环节不仅扩展了模型的知识范围，还使其能够实时更新和处理复杂、具体的问题。通过有效的检索后处理，RAG系统可以更好地利用外部知识库，从而提升整体性能。检索后处理的两种主要方法是重排序和过滤。

#### 2.3.1 重排序

​		重排序是指对检索到的内容进行重新排列，以实现更高的多样性和更优的结果。有效的重排序能够显著减少文本向量化过程中信息丢失对检索质量的影响。例如，Re2G[25]在传统检索器之后应用了一个重排序模型，通过引入知识蒸馏变体，整合BM25和重排结果，实现了多任务场景下的性能提升。AceCoder[26]使用选择器来重排序检索到的程序，以减少冗余并获取多样化的程序。XRICL[27]在检索后使用基于蒸馏的范例重排序器，通过优化文档排序来提升检索效果。

​		此外，Rangan等人[28]通过量化影响度量（QIM）作为“AI法官”机制，结合用户反馈实现了高效的重排序优化，确保更相关的文档被优先选中。UDAPDR[29]通过生成大量合成查询来微调重排序模型，从而在长尾领域显著提高了零样本准确率，并减少了检索延迟。LLM-R[30]则通过迭代训练检索器，利用冻结语言模型的反馈对候选文档进行排名，并训练奖励模型，每次迭代都建立在前一次训练的基础上，不断优化检索器的性能。Hofstätter等人则介绍了FiD-Light[31]，这一模型在保持高效检索的同时，通过重排序机制优化了信息流动。

#### 2.3.2 过滤

​		过滤的目的是剔除未达到特定质量或相关性标准的文档，从而提高生成答案的准确性和效率。有效的过滤机制能够显著减少生成器的负担，使其更专注于高质量的信息。例如，FILCO[32]通过词汇和信息论方法识别有用上下文，并训练上下文过滤模型在测试时进行过滤，显著提高了生成器在提取式问答和对话生成等任务中的上下文质量。COK[33] 提出了渐进式理由校正技术，旨在通过检索到的知识迭代精炼理由。这种方法构成了一个持续的优化过程，显著提升了内容生成中使用的信息的相关性和质量。Self-RAG[34] 引入了一种自我反思机制来高效过滤无关内容。通过使用批评标记，这种方法评估检索到的段落的相关性、支持性和效用，确保只将高质量信息融入内容生成过程。

 

### 2.4 生成

​		在RAG系统中，生成模块的质量直接影响最终输出结果的质量。因此，生成能力决定了整个RAG系统有效性的上限。提升生成质量的一个有效方法是利用提示工程。提示工程通过优化输入提示，能够引导大语言模型（LLM）生成更准确和相关的输出。

​		例如，LLM-Lingua[35]应用一个小型模型来压缩查询的总长度，在保持语义完整性的同时，提高了提示压缩效率，从而加速了大语言模型的推理过程。Toufique等人[36]的研究发现，通过在提示中添加语义事实（如输入代码、函数定义、分析结果及相关评论），可以显著提升代码生成任务的性能。CEDAR[37]设计了提示模板，将代码演示、查询和自然语言说明整合到一个提示中，以提高生成的连贯性和准确性。REPLUG[18]在最终预测前将检索到的文档预先加入输入上下文。该方法采用了一种集群策略，以并行方式处理检索到的文档，突破了语言模型上下文长度的限制，并通过增加计算资源来提升准确性。XRICL[27]针对跨语言的文本到SQL语义解析，通过检索相关的英语示例构建提示，从而在零样本迁移学习的设置下，实现了跨语言的高效语义解析。RECITE[38] 采用了一种自洽技巧，即独立生成多次回答，并通过多数投票系统来选出最合适的答案。这种方法旨在提高答案的可靠性和准确性，从而提升输出的质量和可信度。

 

## 三、RAG 评估

​		为了探索语言模型借助外部知识生成更准确、相关且稳健的回答的有效性，RAG系统的评估已经成为一个重要的研究方向。目前，大多数研究集中在利用常见指标，如精确匹配（EM）和F1分数，来评估RAG模型在各种下游任务中的表现。此外，多种数据集，如TriviaQA[39]、HotpotQA[40]、FEVER[41]、Natural Questions[42]、Wizard of Wikipedia[43]和T-REX[44]，已被广泛用于对RAG模型进行更全面的评估。

​		在关键针对RAG模型的评估上，Chen等人提出了一个RAG基准[45]，从噪声鲁棒性、负面拒绝、信息整合和反事实鲁棒性四个方面进行了评估。噪声鲁棒性考察了语言模型是否能够从包含嘈杂信息的文档中提取必要的信息，这些嘈杂信息虽然与输入查询相关，但对回答查询无用。负面拒绝则衡量了在检索到的内容不足以回答查询时，模型是否能够拒绝回答。信息整合评估了模型是否能够通过整合多个检索到的内容来获取知识并生成回应。反事实鲁棒性则指语言模型辨别检索到的内容中反事实错误的能力。

​		RAGAS[46]和ARES[47]系统则从忠实度和答案相关性两个角度对RAG结果进行评估。忠实度关注结果中的事实是否正确，特别是当正确答案可以从检索到的内容中推断出来时。答案相关性评估生成的回答是否真正解决了问题（即查询）。此外，上下文相关性评估了检索到的内容是否包含尽可能多的与回答查询相关的知识，同时尽可能少地包含无关信息。Lyu等人针对中文环境提出了CRUD-RAG[48]，该基准通过创建、读取、更新和删除四个方面全面评估了RAG系统的各个组件和应用场景。

 

## 四、未来发展方向

### 4.1 RAG目前待解决的问题

​		在检索增强生成（Retrieval-Augmented Generation, RAG）模型的发展中，尽管其在整合检索与生成方面展现了巨大的潜力，但仍存在若干未解的挑战需要进一步探讨与解决。

#### 4.1.1 多轮问答中的检索问题

​		在多轮对话场景下，共指消解是一个显著的问题，尤其是在需要对多轮对话中的语境进行理解和延续的情况下。现有的RAG模型在处理这些情况时，往往表现出明显的不足。在多轮对话中，用户的查询可能会涉及到之前的对话内容，而这些内容的上下文关系并不是一个静态的文本，它需要动态更新和维护。这种动态语境的复杂性给检索带来了极大的挑战，因为检索系统需要能够准确理解当前的查询与之前对话的关系，并有效地将相关信息提取出来。

​		目前，常见的解决方案如查询重写（Query Rewrite）虽然在某些情况下能够部分缓解问题，但并未从根本上解决这一难题。查询重写主要依赖于对话上下文的浅层解析，无法有效处理复杂的共指消解和语义连接。因此，未来的研究需要探索更加智能和动态的检索机制，以提升在多轮对话中对上下文的理解和信息检索的准确性。

#### 4.1.2 多查询与比较

​		在实际应用中，经常会遇到一个查询指向多个候选文档的情况。例如，在电商场景下，用户可能会询问“商品A和商品B哪个更好？”这种情况下，RAG模型需要能够同时处理多个查询，进行文档之间的比较和评估，以提供用户需要的答案。这一过程不仅需要检索出相关的候选文档，还需要对这些文档进行综合分析和对比，进而生成合理的、富有参考价值的答案。

​		目前，现有的RAG模型在多查询处理上，通常采用独立检索然后进行拼接的方式，然而这种方式往往难以有效应对复杂的比较场景。未来的研究可以着重于如何改进模型的多任务处理能力，以更好地实现多查询场景下的高效和准确的信息检索与生成。

#### 4.1.3 范围查询的处理

​		对于范围查询，如“找到价格比商品A贵一百以内的商品”，是另一个需要解决的问题。这种查询通常需要在检索时进行更复杂的条件匹配，并且涉及到更高层次的逻辑推理。现有的检索系统和RAG模型在处理这种查询时，往往局限于简单的文本匹配和过滤，难以充分理解用户的需求和意图。

​		未来，如何提高模型在范围查询场景下的理解和处理能力，将是一个重要的研究方向。具体来说，模型需要能够更好地理解查询中的条件约束，并在海量数据中迅速找到符合条件的信息。这可能需要结合更先进的数据处理和分析技术，以及更加智能的检索算法，以实现更高效的范围查询。

 

### 4.2 多模态RAG

​		多模态检索增强生成（Multimodal Retrieval-Augmented Generation, Multimodal RAG）模型是近年来在自然语言处理和计算机视觉领域逐渐兴起的一个重要方向。相比传统的RAG模型，多模态RAG通过整合不同模态的数据（如文本、图像、音频等），进一步提升了信息检索和生成的能力，展现出广阔的应用前景和研究价值。

​		目前已经有一些多模态RAG的工作被推出。Chen等人提出了MuRAG[49]，这是首个多模态检索增强转换器，通过大规模的图像-文本和仅文本语料库的预训练，显著提升了模型在图像和文本交互推理上的性能。在MuRAG之后，如REVEAL[50] 和 Re-Imagen[51] 的研究专注于提升视觉问答和文本到图像生成。它们分别通过引入动态检索机制和提高图像保真度来实现这一目标。这些进展为图像字幕生成和文本到音频生成方面的进一步模型奠定了基础，扩大了RAG在不同模态中的应用范围，并提高了生成输出的质量和现实感。此外，Yang等人提出Re-ViLM[52]，一个基于Flamingo[53]构建的检索增强视觉语言模型，进行零样本和少样本图像到文本生成，在域外设置中显著提高了性能，并通过简化参数和动态更新数据库来适应新数据 。

​		尽管多模态RAG在应用中展现了巨大的潜力并且也开始有了一些相关研究，但它仍面临许多挑战：

1. **跨模态对齐问题**：如何将不同模态的数据进行有效对齐和融合，是多模态RAG面临的首要问题。不同模态数据具有不同的特征和分布，如何在统一的向量空间中表示它们，并确保它们的语义一致性，是一个关键挑战。

2. **多模态数据的复杂性**：多模态数据通常具有更高的复杂性和异构性，这增加了数据处理和模型训练的难度。特别是在处理高维度图像或视频数据时，如何保持计算效率和模型性能是一大难题。

3. **数据标注和训练资源**：多模态模型的训练通常需要大量的标注数据和计算资源。尤其是跨模态的标注数据非常稀缺和昂贵，如何在有限的数据资源下训练出有效的多模态模型，是一个亟待解决的问题。

4. **模型解释性和鲁棒性**：多模态模型往往更加复杂，如何解释模型的行为和决策过程，以及确保模型在不同模态和场景下的鲁棒性，也是一个重要的研究方向。

5. **信息融合和生成质量**：如何有效地融合不同模态的信息，并在生成过程中保持高质量的内容，是多模态RAG模型的一大挑战。特别是当不同模态的信息存在冲突或不一致时，模型需要能够做出合理的选择和调整。

 

## 五、结论

​		检索增强生成问答（RAG）技术通过将检索和生成有机结合，显著提升了大语言模型在实际应用中的表现。本文在前面的章节中详细介绍了RAG技术的基本流程框架、数据预处理、检索、检索后处理和生成等关键环节及研究现状，并探讨了其在不同应用场景下的评估方法。展示了RAG技术在应对大语言模型所面临的知识局限性和时效性挑战方面，其独特的优势和广阔的应用前景。最后，我们探讨了RAG技术面临的一些挑战和未来发展的方向，介绍了多模态RAG的一些研究工作。虽然本文进行了相对深入的调查，但由于该领域的快速发展和篇幅限制，某些方面可能未被充分分析和探索，或未涵盖最新的发展情况。综上所述，RAG技术通过将检索与生成有机结合，提供了一种有效的解决方案来应对大语言模型在实际应用中的挑战。随着技术的不断发展和优化，RAG有望在更多领域中发挥更大的作用，进一步推动自然语言处理技术的进步。未来，随着检索技术和生成模型的不断演进，RAG技术将继续在知识获取、内容生成和智能问答等方面取得更多突破，助力人工智能技术的全面发展。

 

## 参考文献

[1]     Brown T, Mann B, Ryder N, et al. Language models are few-shot learners[J]. Advances in neural information processing systems, 2020, 33: 1877-1901.

[2]     Lewis P, Perez E, Piktus A, et al. Retrieval-augmented generation for knowledge-intensive nlp tasks[J]. Advances in Neural Information Processing Systems, 2020, 33: 9459-9474.

[3]     H. Chase, "Langchain", https://github.com/langchain-ai/langchain,2022.

[4]     J. Liu, "LlamaIndex", 11 2022. [Online]. Available: https://github.com/jerryjliu/llama_index

[5]     Jiang W, Zhang S, Han B, et al. Piperag: Fast retrieval-augmented generation via algorithm-system co-design[J]. arXiv preprint arXiv:2403.05676, 2024.

[6]     Xia M, Malladi S, Gururangan S, et al. Less: Selecting influential data for targeted instruction tuning[J]. arXiv preprint arXiv:2402.04333, 2024.

[7]     Cheng D, Huang S, Bi J, et al. Uprise: Universal prompt retrieval for improving zero-shot evaluation[J]. arXiv preprint arXiv:2303.08518, 2023.

[8]     Yu W, Iter D, Wang S, et al. Generate rather than retrieve: Large language models are strong context generators[J]. arXiv preprint arXiv:2209.10063, 2022.

[9]     Bevilacqua M, Ottaviano G, Lewis P, et al. Autoregressive search engines: Generating substrings as document identifiers[J]. Advances in Neural Information Processing Systems, 2022, 35: 31668-31683.

[10]    Chen X, Liu Y, He B, et al. Understanding differential search index for text retrieval[J]. arXiv preprint arXiv:2305.02073, 2023.

[11]    Chen H, Pasunuru R, Weston J, et al. Walking down the memory maze: Beyond context limit through interactive reading[J]. arXiv preprint arXiv:2310.05029, 2023.

[12]    Yu S, Liu J, Yang J, et al. Few-shot generative conversational query rewriting[C]//Proceedings of the 43rd International ACM SIGIR conference on research and development in Information Retrieval. 2020: 1933-1936.

[13]    Wang L, Yang N, Wei F. Query2doc: Query expansion with large language models[J]. arXiv preprint arXiv:2303.07678, 2023.

[14]    Gao L, Ma X, Lin J, et al. Precise zero-shot dense retrieval without relevance labels[J]. arXiv preprint arXiv:2212.10496, 2022.

[15]    Kim G, Kim S, Jeon B, et al. Tree of clarifications: Answering ambiguous questions with retrieval-augmented large language models[J]. arXiv preprint arXiv:2310.14696, 2023.

[16]    Wang X, Yang Q, Qiu Y, et al. Knowledgpt: Enhancing large language models with retrieval and storage access on knowledge bases[J]. arXiv preprint arXiv:2308.11761, 2023.

[17]    Ma X, Gong Y, He P, et al. Query rewriting for retrieval-augmented large language models[J]. arXiv preprint arXiv:2305.14283, 2023.

[18]    Weijia S, Sewon M, Michihiro Y, et al. REPLUG: Retrieval-augmented black-box language models[J]. ArXiv: 2301.12652, 2023.

[19]    Zan D, Chen B, Lin Z, et al. When language model meets private library[J]. arXiv preprint arXiv:2210.17236, 2022.

[20]    Li J A, Li Y, Li G, et al. Editsum: A retrieve-and-edit framework for source code summarization[C]//2021 36th IEEE/ACM International Conference on Automated Software Engineering (ASE). IEEE, 2021: 155-166.

[21]    Yao S, Zhao J, Yu D, et al. React: Synergizing reasoning and acting in language models[J]. arXiv preprint arXiv:2210.03629, 2022.

[22]    Xu Z, Liu Z, Liu Y, et al. ActiveRAG: Revealing the Treasures of Knowledge via Active Learning[J]. arXiv preprint arXiv:2402.13547, 2024.

[23]    Wei J, Wang X, Schuurmans D, et al. Chain-of-thought prompting elicits reasoning in large language models[J]. Advances in neural information processing systems, 2022, 35: 24824-24837.

[24]    Pouplin T, Sun H, Holt S, et al. Retrieval-Augmented Thought Process as Sequential Decision Making[J]. arXiv preprint arXiv:2402.07812, 2024.

[25]    Glass M, Rossiello G, Chowdhury M F M, et al. Re2G: Retrieve, rerank, generate[J]. arXiv preprint arXiv:2207.06300, 2022.

[26]    Li J, Zhao Y, Li Y, et al. Acecoder: Utilizing existing code to enhance code generation[J]. arXiv preprint arXiv:2303.17780, 2023.

[27]    Shi P, Zhang R, Bai H, et al. Xricl: Cross-lingual retrieval-augmented in-context learning for cross-lingual text-to-sql semantic parsing[J]. arXiv preprint arXiv:2210.13693, 2022.

[28]    Rangan K, Yin Y. A Fine-tuning Enhanced RAG System with Quantized Influence Measure as AI Judge[J]. arXiv preprint arXiv:2402.17081, 2024.

[29]    Saad-Falcon J, Khattab O, Santhanam K, et al. UDAPDR: unsupervised domain adaptation via LLM prompting and distillation of rerankers[J]. arXiv preprint arXiv:2303.00807, 2023.

[30]    Wang L, Yang N, Wei F. Learning to retrieve in-context examples for large language models[J]. arXiv preprint arXiv:2307.07164, 2023.

[31]    Hofstätter S, Chen J, Raman K, et al. Fid-light: Efficient and effective retrieval-augmented text generation[C]//Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval. 2023: 1437-1447.

[32]    Wang Z, Araki J, Jiang Z, et al. Learning to filter context for retrieval-augmented generation[J]. arXiv preprint arXiv:2311.08377, 2023.

[33]    Li X, Zhao R, Chia Y K, et al. Chain-of-knowledge: Grounding large language models via dynamic knowledge adapting over heterogeneous sources[C]//The Twelfth International Conference on Learning Representations. 2023.

[34]    Asai A, Wu Z, Wang Y, et al. Self-rag: Learning to retrieve, generate, and critique through self-reflection[J]. arXiv preprint arXiv:2310.11511, 2023.

[35]    Jiang H, Wu Q, Lin C Y, et al. Llmlingua: Compressing prompts for accelerated inference of large language models[J]. arXiv preprint arXiv:2310.05736, 2023.

[36]    Ahmed T, Pai K S, Devanbu P, et al. Automatic semantic augmentation of language model prompts (for code summarization)[C]//Proceedings of the IEEE/ACM 46th International Conference on Software Engineering. 2024: 1-13.

[37]    Nashid N, Sintaha M, Mesbah A. Retrieval-based prompt selection for code-related few-shot learning[C]//2023 IEEE/ACM 45th International Conference on Software Engineering (ICSE). IEEE, 2023: 2450-2462.

[38]    Sun Z, Wang X, Tay Y, et al. Recitation-augmented language models[J]. arXiv preprint arXiv:2210.01296, 2022.

[39]    Joshi M, Choi E, Weld D S, et al. Triviaqa: A large scale distantly supervised challenge dataset for reading comprehension[J]. arXiv preprint arXiv:1705.03551, 2017.

[40]    Yang Z, Qi P, Zhang S, et al. HotpotQA: A dataset for diverse, explainable multi-hop question answering[J]. arXiv preprint arXiv:1809.09600, 2018.

[41]    Thorne J, Vlachos A, Christodoulopoulos C, et al. FEVER: a large-scale dataset for fact extraction and VERification[J]. arXiv preprint arXiv:1803.05355, 2018.

[42]    Kwiatkowski T, Palomaki J, Redfield O, et al. Natural questions: a benchmark for question answering research[J]. Transactions of the Association for Computational Linguistics, 2019, 7: 453-466.

[43]    Dinan E, Roller S, Shuster K, et al. Wizard of wikipedia: Knowledge-powered conversational agents[J]. arXiv preprint arXiv:1811.01241, 2018.

[44]    Elsahar H, Vougiouklis P, Remaci A, et al. T-rex: A large scale alignment of natural language with knowledge base triples[C]//Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018). 2018.

[45]    Chen J, Lin H, Han X, et al. Benchmarking large language models in retrieval-augmented generation. arXiv[J]. arXiv preprint arXiv:2309.01431, 2023.

[46]    Chen J, Lin H, Han X, et al. Benchmarking large language models in retrieval-augmented generation[C]//Proceedings of the AAAI Conference on Artificial Intelligence. 2024, 38(16): 17754-17762.

[47]    Saad-Falcon J, Khattab O, Potts C, et al. Ares: An automated evaluation framework for retrieval-augmented generation systems[J]. arXiv preprint arXiv:2311.09476, 2023.

[48]    Lyu Y, Li Z, Niu S, et al. CRUD-RAG: A comprehensive chinese benchmark for retrieval-augmented generation of large language models[J]. arXiv preprint arXiv:2401.17043, 2024.

[49]    Chen W, Hu H, Chen X, et al. Murag: Multimodal retrieval-augmented generator for open question answering over images and text[J]. arXiv preprint arXiv:2210.02928, 2022.

[50]    Hu Z, Iscen A, Sun C, et al. Reveal: Retrieval-augmented visual-language pre-training with multi-source multimodal knowledge memory[C]//Proceedings of the IEEE/CVF conference on computer vision and pattern recognition. 2023: 23369-23379.

[51]    Chen W, Hu H, Saharia C, et al. Re-imagen: Retrieval-augmented text-to-image generator[J]. arXiv preprint arXiv:2209.14491, 2022.

[52]    Yang Z, Ping W, Liu Z, et al. Re-vilm: Retrieval-augmented visual language model for zero and few-shot image captioning[J]. arXiv preprint arXiv:2302.04858, 2023.

[53]    Alayrac J B, Donahue J, Luc P, et al. Flamingo: a visual language model for few-shot learning[J]. Advances in neural information processing systems, 2022, 35: 23716-23736.

[54]    Huang Y, Huang J. A Survey on Retrieval-Augmented Text Generation for Large Language Models[J]. arXiv preprint arXiv:2404.10981, 2024.

[55]    Zhao P, Zhang H, Yu Q, et al. Retrieval-Augmented Generation for AI-Generated Content: A Survey[J]. arXiv preprint arXiv:2402.19473, 2024.

[56]    Gao Y, Xiong Y, Gao X, et al. Retrieval-augmented generation for large language models: A survey[J]. arXiv preprint arXiv:2312.10997, 2023.
