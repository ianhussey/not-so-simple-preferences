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
    "title": "not so simple preferences",
    "description": "",
    "repository": "https:\u002F\u002Fgithub.com\u002Fianhussey\u002Fnot-so-simple-preferences",
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
          "title": "Informed consent and information about the study",
          "content": "\u003Cb\u003EAim of the study\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\nIn this online study (approximately 6 minutes), you will complete a survey in which you are asked to evaluate two stimuli: chocolate and feces (poop). For example, how positive, pleasant, interesting, and attention capturing each is. These questions will be multiple choice with no right or wrong answers.\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cb\u003EAre there any risks involved?\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E\u003Ci\u003E**You will be shown an image of human poop in a toilet bowl during the study.**\u003C\u002Fi\u003E\u003C\u002Fstrong\u003E\u003Cbr\u003E\nYou may find this image to be disgusting. \u003Cbr\u003E\nYou will also be shown an image of chocolates. \u003Cbr\u003E\nParticipation involves no other known risks.\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cb\u003EPayment\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\nIf you choose to participate, you will be paid GBP .60 through the prolific platform for your participation. This study uses one or more ‘attention check’ questions. Your payment is not contingent on your responses to these items, they are only used in the data analysis.\nTo be paid, you must complete all questions. The final page of the survey includes a question where you can indicate that you want your data to be excluded from the analysis. This will not affect your payment.\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cb\u003EYour data\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\nYour data will be saved anonymously with a personal code that links you to your data. This code will allow us to pay you after you’ve completed the survey and to delete your data if you request it. You may request the deletion of your data without any further explanation and\nwithout any penalties.\nYour data will be irrevocably anonymised by the leader of this study one week after data collection, when the leader of the study will delete the personal code that links you to your data. You have until this time to request the deletion of your data. The leader of this study is the only person who has access to this personal code.\nYour irrevocably anonymised data will be shared publicly on two websites for sharing scientific data: Open Science Framework (https:\u002F\u002Fosf.io) and GitHub (https:\u002F\u002Fgithub.com). It will not be possible to link any of this data back to you.\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cb\u003EInformed consent\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cb\u003E\"By clicking 'I consent' below, I affirm the following:\u003C\u002Fb\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n- I am at least 18 years of age.\n- I was informed about the goal, the procedure, the possible advantages and disadvantages and the possible risks of this study.\n- I’ve read and understood the written information about the study.\n- I have had sufficient time to decide whether or not to participate in this study. I understand that participating in this study involves me being shown an image of (a) chocolate and (b) feces (poop).\n- I understand that my personal data will only be stored anonymously. I have been informed about the conditions under which I can request the deletion of my data.\n- I understand that I will have the right to demand my data to be deleted for one week after my participation. To do this, I can contact the study leader (ian.hussey@unibe.ch). I understand that after this time the personal code which links my data to me will be irreversibly deleted, after which the identification of my data for deletion is not possible.\n- I understand that my irrevocably anonymised data will be shared publicly on two websites for sharing scientific data: Open Science Framework (https:\u002F\u002Fosf.io) and GitHub (https:\u002F\u002Fgithub.com).\n- I agree that members of the ethics committee overseeing this study may inspect my original data.\n- I am participating in this study voluntarily. I understand that I can withdraw my consent to participate at any time and without providing reasons, without any disadvantages to me.\"\n\u003Cbr\u003E\nIf you do not consent, please close this window now."
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "I consent",
              "coding": "consent"
            }
          ],
          "name": "consent"
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
      "title": "consent"
    },
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
                      "label": "Please respond with 1 on this item",
                      "coding": "attention_check1"
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
                    "2",
                    "3",
                    "4 = No opinion",
                    "5",
                    "6",
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
                      "label": "Please respond with 7 on this item",
                      "coding": "attention_check2"
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
                    "2",
                    "3",
                    "4 = No opinion",
                    "5",
                    "6",
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
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "other_questions",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "Pedophile",
                  "coding": "pedophile"
                },
                {
                  "label": "Love",
                  "coding": "love"
                },
                {
                  "label": "Murder",
                  "coding": "murder"
                },
                {
                  "coding": "vacation",
                  "label": "Vacation"
                },
                {
                  "label": "Racist",
                  "coding": "racist"
                },
                {
                  "label": "Shrewd",
                  "coding": "shrewd"
                },
                {
                  "label": "Honest",
                  "coding": "honest"
                },
                {
                  "label": "Dishonest",
                  "coding": "dishonest"
                },
                {
                  "label": "Please respond with 'Neutral' on this item",
                  "coding": "attention_check3"
                },
                {
                  "label": "McDonalds",
                  "coding": "mcdonalds"
                },
                {
                  "label": "Burger King",
                  "coding": "burgerking"
                },
                {
                  "label": "Conservatives",
                  "coding": "conservatives"
                },
                {
                  "label": "Liberals",
                  "coding": "liberals"
                }
              ],
              "width": "7",
              "anchors": [
                "Very negative",
                "Negative",
                "Somewhat negative",
                "Neutral",
                "Somewhat positive",
                "Positive",
                "Very positive"
              ],
              "label": "\u003Ci\u003EPlease respond with how positive or negative you think each of the following are:\u003C\u002Fi\u003E",
              "name": "other_evaluations",
              "shuffle": false,
              "help": ""
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
          "title": "other_evaluations",
          "width": "l"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "Girls tend to wear skirts",
                  "coding": "girls_skirts"
                },
                {
                  "label": "Boys tend to wear skirts",
                  "coding": "boys_skirts"
                },
                {
                  "label": "Cats have four legs",
                  "coding": "cats_legs"
                },
                {
                  "label": "Fish have four legs",
                  "coding": "fish_legs"
                }
              ],
              "width": "7",
              "anchors": [
                "Strongly disagree",
                "Disagree",
                "Somewhat disagree",
                "Neutral",
                "Somewhat agree",
                "Agree",
                "Strongly agree"
              ],
              "label": "\u003Ci\u003EPlease respond with how much you disagree or agree with the following statements:\u003C\u002Fi\u003E",
              "name": "other_beliefs"
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
          "title": "other_beliefs",
          "width": "l"
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
          "content": "Your data have been recorded. Your completion code is C44YS6QA. Please take note of this and then feel free to close this window. "
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