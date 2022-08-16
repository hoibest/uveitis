const cmvauEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR positive for herpes simplex virus or varicella zoster virus</ol>`

const hsauEx = 
`<ol><li>Concomitant dermatomal/cutaneous varicella zoster virus (unless aqueous specimen PCR positive for herpes simplex virus)
<li>Positive Serology for syphillis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue bopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR positive for cytomegalovirus or varicella zoster virus</ol>`

const vzvauEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR positive for cytomegalovirus or herpes simplex virus</ol>`

const fusEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR* positive for cytomegalovirus, herpes simplex virus or varicella
zoster virus</ol>`

const jiacauEx = 
`<ol><li>Enthesitis-related arthritis
<li>Positive serologic test for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata) or other granulomatous disease (e.g. familial juvenile systemic granulomatosis)
<li>Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus, or varicella
zoster virus</ol>`

const sauEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR positive for cytomegalovirus, Herpes simplex virus or Varicella
zoster virus</ol>`

const tinuEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue
biopsy demonstrating non-caseating granulomata)</ol>`


////////////////////////////////////////

const cmvauRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span class="haha" style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, anterior chamber inflammation should be present
    <li> no evidence of retinitis</ol>`;

const cmvauRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span class="haha" style="font-weight: 500;">Evidence of cytomegalovirus infection in the eye</span>
    <ol type="a"><li> positive PCR for cytomegalovirus on aqueous specimen</ol>`;

const hsauRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation
    <li> no evidence of retinitis</ol>`;

const hsauRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)</span><br>`;

const hsauRule_3_html = 
`<span class='rule-number'>Rule #3 <br></span>
<span style="font-weight: 500;">Evidence of herpes simplex infection in the eye</span>
    <ol type="a"><li>aqueous humor PCR positive for herpes simplex virus OR
    <li> sectoral iris atrophy in a patient ≤ 50 years of age OR
    <li> herpes simplex keratitis</ol>`;

const vzvauRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation
    <li> no evidence of retinitis</ol>`;

const vzvauRule_2_html =
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)</span><br>`;

const vzvauRule_3_html = 
`<span class='rule-number'>Rule #3 <br></span>
<span style="font-weight: 500;">Evidence of varicella zoster virus infection in the eye</span>
    <ol type="a"><li>aqueous humor PCR positive for varicella zoster virus OR
    <li> sectoral iris atrophy in a patient ≥ 60 years of age OR
    <li> concurrent or recent dermatomal Herpes zoster</ol>`;

const fusRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if vitreous cells are present, anterior chamber inflammation also should be present
    <li> no evidence of active retinitis</ol>`;

const fusRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Unilateral uveitis</span><br>`;

const fusRule_3_html = 
`<span class='rule-number'>Rule #3 <br></span>
<span style="font-weight: 500;">Evidence of Fuchs uveitis syndrome</span>
    <ol type="a"><li> heterochromia OR
    <li> unilateral diffuse iris atrophy AND stellate keratic precipitates</ol>`;

const fusRule_4_html = 
`<span class='rule-number'>Rule #4 <br></span>
<span style="font-weight: 500;">Neither endotheliitis nor nodular, coin-shaped endothelial lesions</span><br>`;

const jiacauRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
<ol type="a"><li> anterior chamber cells
<li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation</ol>`;

const jiacauRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic</span><br>`;

const jiacauRule_3_html =
`<span class='rule-number'>Rule #3 <br></span>
<span style="font-weight: 500;">Juvenile idiopathic arthritis of the following subtypes</span>
    <ol type="a"><li>Oligoarthritis, persistent or extended OR
    <li>Rheumatoid factor negative polyarthritis OR
    <li>Juvenile psoriatic arthritis, other than psoriatic spondylitis</ol>`;

const sauRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation</ol>`;

const sauRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Characteristic uveitis course</span>
    <ol type="a"><li> Acute or recurrent acute, unilateral or unilateral alternating course OR
    <li> Chronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course</ol>`;

const sauRule_3_html = 
`<span class='rule-number'>Rule #3 <br></span>
<span style="font-weight: 500;">ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive</span><br>`;

const sauRule_4_html = 
`<span class='rule-number'>Rule #4 <br></span>
<span style="font-weight: 500;">Chronic uveitis with both ASAS-defined spondyloarthritis (axial and peripheral) AND HLA-B27-positive</span>`;

const tinuRule_1_html = 
`<span class='rule-number'>Rule #1 <br></span>
<span style="font-weight: 500;">Evidence of anterior uveitis</span>
<ol type="a"><li> anterior chamber cells
<li> if vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present </ol>`;

const tinuRule_2_html = 
`<span class='rule-number'>Rule #2 <br></span>
<span style="font-weight: 500;">Evidence of tubulointerstitial nephritis, either</span>
<ol type="a"><li>Positive renal biopsy OR
<li> Elevated urine β-microglobulin and either abnormal urine analysis or elevated serum creatinine </ol>`;