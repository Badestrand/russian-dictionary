# Russian Dictionary Data

These CSV files contain the dictionary data from the dictionary website https://en.openrussian.org. The origin are various sources including Wiktionary and lots of corrections and additions by users.

The data is far from perfect but also not completely rubbish. There might be some artefacts and a bit of dirtyness like an asterisk or slash where it shouldn't be. If you have any improvements, please try to make them on the website directly and if not possible or if there are structural deficits please open an issue.

You can use the data quite freely, see the LICENSE file (Creative Commons Attribution Share Alike 4.0).


## About the CSVs

On the website you can download a snapshot of the actual database at https://en.openrussian.org/dictionary. However, those are not as accessible and have a complex format in parts. Thus these CSVs. The snapshots here are automated by hand so if you need a very recent one please open an issue and I will do the export.


### The files

UTF-8 format with fields separated by a tab. First row is the header as usual in CSVs. The first columns are equal in all files:

| Column | Description |
|---|---|
| bare | The russian word without an accent sign |
| accented | If available and it makes sense to display the accent, this field contains the word including the accent, indicated by an apostroph, e.g. `кото'рый` |
| translations_en | English translations for this entry. Main meaning differences are separated by semicolon (;) and synonyms by comma (,) |
| translations_de | Same as english translation but german |


### adjectives.csv

| Column | Description |
|---|---|
| (4 columns skipped, see above) | (4 columns skipped, see above) |
| comparative | Accented comparative form for the adjective, e.g. `нове'е` for `новый`. Might contain several entries separated by semicolons, e.g. `бо'льше;бо'льший` for `большой`, which means that there are several comparative forms in use |
| superlative | Accented superlative form for the adjective, e.g. `нове'йший` for `новый`. Might contain several entries separated by semicolons, e.g. `лу'чший;наилу'чший` for `хороший`, which means that there are several superlative forms in use |
| short_m | Accented male short form, e.g. `вели'к` for `большой`, might contain several forms separated by a semicolon |
| short_f | Accented female short form, e.g. `велика'` for `большой`, might contain several forms separated by a semicolon |
| short_n | Accented neutral short form, e.g. `велико'` for `большой`, might contain several forms separated by a semicolon |
| short_pl | Accented plural short form, e.g. `велики'` for `большой`, might contain several forms separated by a semicolon |
| decl_m_nom | Accented declension form male singular nominative, e.g. `большо'й` for `большой`, might contain several forms separated by a semicolon |
| decl_m_gen | Accented declension form male singular genitive, e.g. `большо'го` for `большой`, might contain several forms separated by a semicolon |
| decl_m_dat | Accented declension form male singular dative, e.g. `большо'му` for `большой`, might contain several forms separated by a semicolon |
| decl_m_acc | Accented declension form male singular accusative, e.g. `большо'го,большо'й` for `большой`, might contain several forms separated by a semicolon |
| decl_m_inst | Accented declension form male singular instrumental, e.g. `больши'м` for `большой`, might contain several forms separated by a semicolon |
| decl_m_prep| Accented declension form male singular prepositional, e.g. `большо'м` for `большой`, might contain several forms separated by a semicolon |
| decl_f_nom | Accented declension form female singular nominative, e.g. `больша'я` for `большой`, might contain several forms separated by a semicolon |
| decl_f_gen | Accented declension form female singular genitive, e.g. `большо'й` for `большой`, might contain several forms separated by a semicolon |
| decl_f_dat | Accented declension form female singular dative, e.g. `большо'й` for `большой`, might contain several forms separated by a semicolon |
| decl_f_acc | Accented declension form female singular accusative, e.g. `большу'ю` for `большой`, might contain several forms separated by a semicolon |
| decl_f_inst | Accented declension form female singular instrumental, e.g. `большо'й,большо'ю` for `большой`, might contain several forms separated by a semicolon |
| decl_f_prep| Accented declension form female singular prepositional, e.g. `большо'й` for `большой`, might contain several forms separated by a semicolon |
| decl_n_nom | Accented declension form neutral singular nominative, e.g. `большо'е` for `большой`, might contain several forms separated by a semicolon |
| decl_n_gen | Accented declension form neutral singular genitive, e.g. `большо'го` for `большой`, might contain several forms separated by a semicolon |
| decl_n_dat | Accented declension form neutral singular dative, e.g. `большо'му` for `большой`, might contain several forms separated by a semicolon |
| decl_n_acc | Accented declension form neutral singular accusative, e.g. `большо'е` for `большой`, might contain several forms separated by a semicolon |
| decl_n_inst | Accented declension form neutral singular instrumental, e.g. `больши'м` for `большой`, might contain several forms separated by a semicolon |
| decl_n_prep| Accented declension form neutral singular prepositional, e.g. `большо'м` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_nom | Accented declension form plural nominative, e.g. `больши'е` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_gen | Accented declension form plural genitive, e.g. `больши'х` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_dat | Accented declension form plural dative, e.g. `больши'м` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_acc | Accented declension form plural accusative, e.g. `больши'х,больши'е` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_inst | Accented declension form plural instrumental, e.g. `больши'ми` for `большой`, might contain several forms separated by a semicolon |
| decl_pl_prep| Accented declension form plural prepositional, e.g. `больши'х` for `большой`, might contain several forms separated by a semicolon |


### nouns.csv

| Column | Description |
|---|---|
| (4 columns skipped, see above) | (4 columns skipped, see above) |
| gender | 'f', 'm', 'n' or empty if unknown |
| partner | The other-gender word, e.g. `богиня` for `бог`, not accented |
| animate | '0' if the noun denotes an inanimate thing, '1' for a living thing and empty if unknown |
| indeclinable | '1' if the noun is not flexed, e.g. `тахи` |
| sg_only | '1' if there is only a singular and no plural form, e.g. for `воздух` |
| pl_only | '1' if there is only a plural and no singular form, e.g. for `деньги` |
| sg_nom | Accented declension form singular nominative, e.g. `вре'мя` for `время`, might contain several forms separated by a semicolon |
| sg_gen | Accented declension form singular genitive, e.g. `вре'мени` for `время`, might contain several forms separated by a semicolon |
| sg_dat | Accented declension form singular dative, e.g. `вре'мени` for `время`, might contain several forms separated by a semicolon |
| sg_acc | Accented declension form singular accusative, e.g. `вре'мя` for `время`, might contain several forms separated by a semicolon |
| sg_inst | Accented declension form singular instrumental, e.g. `вре'менем` for `время`, might contain several forms separated by a semicolon |
| sg_prep | Accented declension form singular prepositive, e.g. `вре'мени` for `время`, might contain several forms separated by a semicolon |
| pl_nom | Accented declension form plural nominative, e.g. `времена'` for `время`, might contain several forms separated by a semicolon |
| pl_gen | Accented declension form plural genitive, e.g. `времён` for `время`, might contain several forms separated by a semicolon |
| pl_dat | Accented declension form plural dative, e.g. `времена'м` for `время`, might contain several forms separated by a semicolon |
| pl_acc | Accented declension form plural accusative, e.g. `времена'` for `время`, might contain several forms separated by a semicolon |
| pl_inst | Accented declension form plural instrumental, e.g. `времена'ми` for `время`, might contain several forms separated by a semicolon |
| pl_prep | Accented declension form plural prepositive, e.g. `времена'х` for `время`, might contain several forms separated by a semicolon |


### others.csv

| Column | Description |
|---|---|
| (4 columns skipped, see above) | (4 columns skipped, see above) |

 - no other columns -


### verbs.csv

| Column | Description |
|---|---|
| (4 columns skipped, see above) | (4 columns skipped, see above) |
| aspect | 'perfective', 'imperfective' or blank if unknown |
| partner | For perfective words the imperfective partner and vice versa, e.g. `говорить` for `сказать`, might contain several forms separated by a semicolon |
| imperative_sg | Accented singular imperative form, e.g. `скажи'` for `сказать`, might contain several forms separated by a semicolon |
| imperative_pl | Accented plural imperative form, e.g. `скажи'те` for `сказать`, might contain several forms separated by a semicolon |
| past_m | Accented singular male past form, e.g. `сказа'л` for `сказать`, might contain several forms separated by a semicolon |
| past_f | Accented singular female past form, e.g. `сказа'ла` for `сказать`, might contain several forms separated by a semicolon |
| past_n | Accented singular neutral past form, e.g. `сказа'ло` for `сказать`, might contain several forms separated by a semicolon |
| past_pl | Accented plural past form, e.g. `сказа'ли` for `сказать`, might contain several forms separated by a semicolon |
| presfut_sg1 | Accented first person singular form of the present of future, depending on the word's aspect, e.g. `скажу'` for `сказать`, might contain several forms separated by a semicolon |
| presfut_sg2 | Accented second person singular form of the present of future, depending on the word's aspect, e.g. `ска'жешь` for `сказать`, might contain several forms separated by a semicolon |
| presfut_sg3 | Accented third person singular form of the present of future, depending on the word's aspect, e.g. `ска'жет` for `сказать`, might contain several forms separated by a semicolon |
| presfut_pl1 | Accented first person plural form of the present of future, depending on the word's aspect, e.g. `ска'жем` for `сказать`, might contain several forms separated by a semicolon |
| presfut_pl2 | Accented second person plural form of the present of future, depending on the word's aspect, e.g. `ска'жете` for `сказать`, might contain several forms separated by a semicolon |
| presfut_pl3 | Accented third person plural form of the present of future, depending on the word's aspect, e.g. `ска'жут` for `сказать`, might contain several forms separated by a semicolon |

