# Russian Dictionary Data

These CSV files contain the dictionary data from the dictionary website https://en.openrussian.org. The origin are various sources including Wiktionary and lots of corrections and additions by users.

The data is far from perfect but also not completely rubbish. There might also be some artefacts and a bit of dirtyness like an asterisk or slash where it shouldn't be. If you have any improvements, please try to make them on the website directly and if not possible or if there are structural deficits please open an issue.

You can use the data quite freely, see the LICENSE file (Creative Commons Attribution Share Alike 4.0).

## About the CSVs

On the website you can download a snapshot of the actual database at https://en.openrussian.org/dictionary. However, those are not as accessible and have a complex format in parts. Thus these CSVs. The snapshots here are automated by hand so if you need a very recent one please open an issue and I will do the export.

### adjectives.csv

Has the following fields:

bare
accented	position	translations_en	translations_de	incomparable	comparative	superlative	short_m	short_f	short_n	short_pl	decl_m_nom	decl_m_gen	decl_m_dat	decl_m_acc	decl_m_inst	decl_m_prep	decl_f_nom	decl_f_gen	decl_f_dat	decl_f_acc	decl_f_inst	decl_f_prep	decl_n_nom	decl_n_gen	decl_n_dat	decl_n_acc	decl_n_inst	decl_n_prep	decl_pl_nom	decl_pl_gen	decl_pl_dat	decl_pl_acc	decl_pl_inst	decl_pl_prep

| Field | Description |
|---|---|
| bare | The russian word without an accent sign |
| accented | If available and it makes sense to display the accent, this field contains the word including the accent, indicated by an apostroph, e.g. `кото'рый` |
| position | For some words there are several entries, e.g. for `украинский` there exists a noun (the Ukrainian person) as well as an adjective (ukrainian). This field denotes the order of those entries. Has weak confidence only, is mostly random |
| translations_en | English translations for this entry. Main meaning differences are separated by semicolon (;) and synonyms by comma (,) |
| translations_de | Same as english translation but german |
| incomparable | If this field is 1 it means the adjective can not be used for comparisons, but currently not used. |
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
