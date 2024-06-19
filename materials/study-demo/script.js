// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Hello, and welcome to the study!"
        },
        {
          "required": true,
          "type": "input",
          "label": "What is your Prolific ID?",
          "name": "prolific_id"
        },
        {
          "required": true,
          "type": "input",
          "label": "What is your age?",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "65"
          },
          "name": "age"
        },
        {
          "required": true,
          "type": "input",
          "label": "What is your gender?",
          "name": "gender"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographics"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "scales",
      "shuffle": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "desirability_questions",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fpoop.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"questionnaire\"\u003E\n        \u003Ch1\u003EHow desirable is human poop in a toilet bowl?\u003C\u002Fh1\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Very undesirable\" required=\"true\"\u003E Very undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Somewhat undesirable\"\u003E Somewhat undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"A little undesirable\"\u003E A little undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"A little desirable\"\u003E A little desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Somewhat desirable\"\u003E Somewhat desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Very desirable\"\u003E Very desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "desirability_poop",
              "width": "l"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fchocolates.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"questionnaire\"\u003E\n        \u003Ch1\u003EHow desirable is a box of chocolates?\u003C\u002Fh1\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Very undesirable\" required=\"true\"\u003E Very undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Somewhat undesirable\"\u003E Somewhat undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"A little undesirable\"\u003E A little undesirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"A little desirable\"\u003E A little desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Somewhat desirable\"\u003E Somewhat desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"desirability\" value=\"Very desirable\"\u003E Very desirable\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "desirability_chocolate",
              "width": "l"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "classic_questions",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fpoop.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"questionnaire\"\u003E\n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EHuman poop in a toilet bowl is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Very negative\" required=\"true\"\u003E Very negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Somewhat negative\"\u003E Somewhat negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"A little negative\"\u003E A little negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"A little positive\"\u003E A little positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Somewhat positive\"\u003E Somewhat positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Very positive\"\u003E Very positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EHuman poop in a toilet bowl is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Very unpleasant\" required=\"true\"\u003E Very unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Somewhat unpleasant\"\u003E Somewhat unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"A little unpleasant\"\u003E A little unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"A little pleasant\"\u003E A little pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Somewhat pleasant\"\u003E Somewhat pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Very pleasant\"\u003E Very pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EHuman poop in a toilet bowl is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Very bad\" required=\"true\"\u003E Very bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Somewhat bad\"\u003E Somewhat bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"A little bad\"\u003E A little bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"A little good\"\u003E A little good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Somewhat good\"\u003E Somewhat good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Very good\"\u003E Very good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "classic_poop",
              "width": "l"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fchocolates.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"questionnaire\"\u003E\n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EA box of chocolates is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Very negative\" required=\"true\"\u003E Very negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Somewhat negative\"\u003E Somewhat negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"A little negative\"\u003E A little negative\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"A little positive\"\u003E A little positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Somewhat positive\"\u003E Somewhat positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pos_neg\" value=\"Very positive\"\u003E Very positive\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EA box of chocolates is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Very unpleasant\" required=\"true\"\u003E Very unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Somewhat unpleasant\"\u003E Somewhat unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"A little unpleasant\"\u003E A little unpleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"A little pleasant\"\u003E A little pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Somewhat pleasant\"\u003E Somewhat pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_pleasant_unpleasant\" value=\"Very pleasant\"\u003E Very pleasant\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \n        \u003Cdiv class=\"question\"\u003E\n            \u003Cp\u003EA box of chocolates is...\u003C\u002Fp\u003E\n            \u003Cul class=\"options\"\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Very bad\" required=\"true\"\u003E Very bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Somewhat bad\"\u003E Somewhat bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"A little bad\"\u003E A little bad\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Neutral\"\u003E Neutral\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"A little good\"\u003E A little good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Somewhat good\"\u003E Somewhat good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n                \u003Cli\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"classic_good_bad\" value=\"Very good\"\u003E Very good\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "classic_chocolate",
              "width": "l"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "original_questions",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fpoop.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "How much do you like ...",
                      "coding": "like"
                    },
                    {
                      "label": "How attention capturing is …",
                      "coding": "attention_capturing"
                    },
                    {
                      "label": "How unusual is …",
                      "coding": "unusual"
                    },
                    {
                      "label": "How much do you want to figure out what … is?",
                      "coding": "figure_out"
                    },
                    {
                      "label": "How positive is …",
                      "coding": "positive"
                    },
                    {
                      "label": "How fixated are you on …",
                      "coding": "fixtated"
                    },
                    {
                      "label": "How much do you want to look away from …",
                      "coding": "look_away"
                    },
                    {
                      "label": "How focused are you on …",
                      "coding": "focused"
                    },
                    {
                      "label": "Please respond with 7 on this item",
                      "coding": "attention_check"
                    },
                    {
                      "label": "How negative is …",
                      "coding": "negative"
                    },
                    {
                      "label": "How disgusting is …",
                      "coding": "disgusting"
                    },
                    {
                      "label": "How appealing is …",
                      "coding": "appealing"
                    },
                    {
                      "label": "How eye-catching is …",
                      "coding": "eye-catching"
                    },
                    {
                      "label": "How attractive is …",
                      "coding": "attractive"
                    },
                    {
                      "label": "How much do you want to avoid looking at …",
                      "coding": "avoid_looking"
                    }
                  ],
                  "width": "7",
                  "anchors": [
                    "1 = Not at all",
                    null,
                    null,
                    "4 = No opinion",
                    null,
                    null,
                    "7 = A lot"
                  ],
                  "label": "\u003Ci\u003EHuman poop in a toilet bowl\u003C\u002Fi\u003E",
                  "name": "poop_original"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "original_poop",
              "width": "l"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"image-container\"\u003E\u003Cimg src=\"static\u002Fchocolates.jpeg\" class=\"original-header-image\"\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "How much do you like ...",
                      "coding": "like"
                    },
                    {
                      "label": "How attention capturing is …",
                      "coding": "attention_capturing"
                    },
                    {
                      "label": "How unusual is …",
                      "coding": "unusual"
                    },
                    {
                      "label": "How much do you want to figure out what … is?",
                      "coding": "figure_out"
                    },
                    {
                      "label": "How positive is …",
                      "coding": "positive"
                    },
                    {
                      "label": "How fixated are you on …",
                      "coding": "fixtated"
                    },
                    {
                      "label": "How much do you want to look away from …",
                      "coding": "look_away"
                    },
                    {
                      "label": "How focused are you on …",
                      "coding": "focused"
                    },
                    {
                      "label": "Please respond with 1 on this item",
                      "coding": "attention_check"
                    },
                    {
                      "label": "How negative is …",
                      "coding": "negative"
                    },
                    {
                      "label": "How disgusting is …",
                      "coding": "disgusting"
                    },
                    {
                      "label": "How appealing is …",
                      "coding": "appealing"
                    },
                    {
                      "label": "How eye-catching is …",
                      "coding": "eye-catching"
                    },
                    {
                      "label": "How attractive is …",
                      "coding": "attractive"
                    },
                    {
                      "label": "How much do you want to avoid looking at …",
                      "coding": "avoid_looking"
                    }
                  ],
                  "width": "7",
                  "anchors": [
                    "1 = Not at all",
                    null,
                    null,
                    "4 = No opinion",
                    null,
                    null,
                    "7 = A lot"
                  ],
                  "label": "\u003Ci\u003EA box of chocolates\u003C\u002Fi\u003E",
                  "name": "chocolates_original"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "original_chocolates",
              "width": "l"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": false,
          "type": "textarea",
          "label": "Please do not enter any text here.",
          "help": "This is a bot check; just leave it blank and click \"continue\"!",
          "name": "bot-check"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "bot_check"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "In your honest opinion, should we include your data in our analysis?",
          "help": "Reasons for not including data can be related to not paying attention, being disrupted while completing the experiment, etc. Please note that your payment will not be affected by your answer to this question.",
          "name": "self_exclude",
          "options": [
            {
              "label": "Yes, include my data",
              "coding": "include"
            },
            {
              "label": "No, exclude my data",
              "coding": "exclude"
            }
          ],
          "shuffle": true
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "self_exclusion"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you!",
          "content": "Your data have been recorded. Your completion code is XXXXXXXX. Please take note of this and then feel free to close this window. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "completion"
    }
  ]
})

// Let's go!
study.run()