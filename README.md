# idea_generation_pj_jazz

## セットアップ
### github / instanceのセットアップ
`/home/azureuser/cloudfiles/code/Users/common/documents/初期設定.mdを参照`

### conda 環境のsetup
```bash
# setup conda
conda create -n jazzml --clone azureml_py310_sdkv2
conda activate jazzml
pip install --no-deps -r /home/azureuser/cloudfiles/code/Users/common/setting_files/requirements_20240522_v2.txt 

# git clone -> multi github userする場合は、github.com.{username}で運用
git clone git@github.com:libcon-acrobat/idea_generation_pj_jazz.git

# copy env
cp ~/cloudfiles/code/Users/common/setting_files/.env .env
```

### project setup
```bash
cd idea_generation_pj_jazz
pip install -e .
```

package rootを取得する場合
```python
from idea_generation import get_prj_root
prj_root = get_prj_root()
```

Debug modeの取得
```python
from idea_generation import is_debug
# read .env file and return parsed value
DEBUG = is_debug()
```


### data copy
以下のnotebookを実行する
`idea_generation_pj_jazz/2000_element/2500_assets_capabilities/copy_data.ipynb`


## 構成
```bash
├── 0000_system
│   └── 0100_modules
│       ├── api_settings.py
│       ├── custom_tools
│       │   ├── __init__.py
│       │   ├── dummy_answers_jp.py
│       │   ├── evaluate_general_relevance.py
│       │   ├── evaluate_problem_relevance.py
│       │   ├── evaluate_relevance.py
│       │   ├── evaluate_relevance_jp.py
│       │   ├── google_search.py
│       │   ├── old
│       │   ├── qna_validate.py
│       │   ├── qna_validate_datamodel.py
│       │   ├── webquery.py
│       │   └── webquery_jp.py
│       ├── model_setup.py
│       ├── pjconfig_setup.py
│       ├── project_modules
│       │   └── element
│       └── web_research
│           ├── __init__.py
│           ├── web_research_chain.py
│           ├── web_research_chunk.py
│           ├── web_research_embedding.py
│           ├── web_research_fetch.py
│           ├── web_research_manage.py
│           ├── web_research_retrieval.py
│           └── web_research_vectordb.py
├── 1000_input
│   └── 1100_domain_input
│       └── domain_definition.csv
├── 2000_element
│   ├── 2100_domain_research
│   │   └── apparent_problems.ipynb
│   ├── 2500_assets_capabilities
│   │   └── copy_data.ipynb
│   ├── example_apparent_problems.ipynb
│   └── old
│       └── sample_opportunity.ipynb
├── 3000_eval_element
│   └── todo_later
├── 4000_ideate
│   ├── 4100_combination_relevance
│   │   └── combination_relevance.ipynb
│   └── 4200_ideation
│       └── ideation.ipynb
├── 5000_eval_idea
│   ├── 5100_evaluation
│   │   └── sample_evaluation_v2.ipynb
│   └── 5200_analyze
│       └── sample_organize_eval_v2.ipynb
├── README.md
├── examples
│   └── get_prj_root.ipynb
├── idea_generation                         <- prject rootモジュール化用のpackage
│   ├── __init__.py                         <- package dirの取得など
│   └── idea_generation.py
├── pyproject.toml
├── readme.txt
└── temp
    ├── 2000_element
    │   ├── 2100_domain_research
    │   ├── 2500_assets_capabilities
    │   └── 2900_generative_ai
    ├── 4000_ideate
    │   └── 4100_combination_relevance
    └── _cache_v2
        ├── chunk
        ├── content
        ├── embedding
        └── status
```
