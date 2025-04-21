/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
       height:{
          // height of the nav bar or the 1st bix  where reserch and remaing ting is located
          height_of_full_navbar:"50px",

          openai_height:"33px",
          // height of the main box scroll of the flex
          height_chatpt_anyting:"600px",
          // height of the space which is located above the ask for chatgpt 
          space_above_theask_for_chatgpt_div:"228px",
          // height of the icon box in the input
           height_of_the_icon_sub_box:"30px",
          //  height of the openai01 
          height_of_1st_space_before_the_open_ai:"220px",
            // after the button first box scrollable box\
          // height of the 1st box
          height_of_the_main_chatgpt_box:"547px",
           // height of the main 1scrollable div and the height of every boxes
           height_of_the_main_1st_scrollable_div:"471px",
            // height of the 2st  scrlling box   // 3rd 4th 5th
          height_of_the_main_research_box:"650px",
              // fotter upside box  :instant answers greater productivity.endless inspiration 
            // height of the footer upside box in the front sheet
            height_of_the_fotter_upside_box_in_the_frontsheet:"645px",
            // footer in font sheet
                //  heighth of the main footer_box
                 heighth_of_the_main_footer_box:'750px',
                //  inner fotter box
                   inner_footer_box:'610px',
                    // width of the  our reserch& latest advancements div , chatgpt api& explore  more div, saftey overview ,company div, terms and polices div
                  height_of_the_reserch_explore_saftey_company_terms_and_polices:'580px',
                  // heightof the reserch
                  // height of thereserch box full
                  // and  the height  of the openai @2024-25  in the fotter below box
                  height_of_the_main_box_full:'17.5167px',
                //  height of the language box  below the footer
                     height_of_the_lang:"34.7167px",



      // height of the  next  file saftey.html
      height_of_the_saftey_at_every_point_main_box_and_some_content_total_main_box:"8300px",
      height_above_box_of_the_saftey_at_every_point:"200px",
      height_the_box_of_the_saftey_at_every_point:"130px",

      // we believ in ais potential to make life better  for everyone main box
      height_of_the_we_believ_in_ais_potential_to_make_life_better_for_everyone_main_box:"200px",
      //  space below box we believ in ais potential to make life better  for everyone main box
      space_below_box_we_believ_in_ais_potential_to_make_life_better_for_everyone_main_box:"300px",
      // teach text share three box
      height_of_teach_text_share_three_box_main:"470px",

      // below_teach text share three box ,,saftey doesnt stop
      below_teach_text_share_three_box_saftey_doesnt_stop:"200px",
      // below the saftey doesnot stop:  (some long content)
      below_the_saftey_doesnot_stop_long_content_main_box:"99px",
      // animation three cirles below the some text like (building ai isnt one and done every day is chance t)
       height_main_animation_three_cirles_below_the_some_text:"1000px",
      //  leading the way in saftey box after the animation
      height_of_the_leading_the_way_in_saftey_box_mainbox:"140px",
      //we collabrate with the industry leaders main box after (the leading way text) 
      height_we_collabrate_with_the_industry_leaders_main_box:"80px",
      // 5 boxes which contain a child saftey,private information,deep fakes bias,election
        five_boxes_which_contain_a_child_saftey_privateInformation_deepFakes_bia_election:"800px",
        //main box of the open ai reserchers after (the 5 boxes which contain child saftey etc)
        height_of_the_main_box_of_the_open_ai_reserchers:"118px",
        // get inside open ai with our series text after the(conversation with open ai reserchers)
        get_inside_open_ai_with_our_series_text:"80px",
        // main box of two button box(whre ai going) (teaching chatting good)
        height_of_main_box_of_two_button:"50px",
        // after  the button there is  video box
        height_of_main_video_box:"700px",
        // (after the video box )latest news on saftey text
        main_box_of_latest_news_on_saftey_text:"270px",
        // after the text of latest news on text: main 3 boxes 
        height_of_main_3_boxes:"472px",
        // main_box_of_the go deeper on saftey
        main_box_of_the_go_deeper_on_saftey:"290px",
        // 1026.55
        // main box of the vertical boxes of  8 boxes  after the go deeper  on saftey
        main_box_of_the_vertical_boxes_of_8_boxes:"1226px",
          // height of the sub boes so called 8 boxes
          height_of_the_sub_boes_in_the_8_main_boxes:"136px",
            // height of the (1st 3 boes):1st last and middle content boxs in te 8 boxs 
             height_of_the1st_last_and_middle_content_boxes:"125px", 
            //  height_of_sub boxes which are in the main text box of the 8 boxes (which are vertical)
            // height_of_1sub_boxes_which_are_in_the_main_text_box_of_the_8_boxes
            height_of_1sub_boxes_which_are_in_the_main_text_box_of_the_8_boxes:"66px",
            // height_of_2ndsub_boxes_which_are_in_the_main_text_box_of_the_8_boxes 
            height_of_2ndsub_boxes_which_are_in_the_main_text_box_of_the_8_boxes:"55px",







        // main box after below the footer
        main_box_after_below_the_footer:"200px",

        // height of the (after the text of latest news on text) main 3 boxes  -->
        height_of_the_after_the_text_of_latest_news_on_text_main_3boxes:"471px",


        
        //  5 boxes which contain a child saftey,private information,deep fakes bias,election 

        // second box which have the content 
        height_second_box_which_have_the_content:"560px",
        //1st box child saftey, private information deep fakes bias, election in 5box
        height1st_box_child_saftey_so_on_in_box:"264px",
        //  space below  the box which contain the child saftey, private information, deep fakes bias, election -->
         space_down_side_the_box_which_contain_the_child_saftey_private_information_deep_fakes_bias_election:"120px"






      









        

              


          














          
       },
       width:{
        //   navbar--widthbeside the  icon in the navbar
        beside_the_icon_in_the_navbar:"212px",
        openai_width:"37px",
        // width of the open i image box and the text open ai
        open_ai_main_box:"106px",
        // sapce box width before the reserch products saftey company
        space_nav_two:'296px',
        //  width for the reserch products saftey company
        main_box_of_reserch_products_saftey_company:'305px',
        // width of the box after the reserch products saftey company
        box_after:'355px',
        // width the scrooling in the 2 nd part
        scrooling_box_width:'1519px',
        // total there are tree div in the ask for chat gpt line
        // first div the space before the Ask for chatgpt --
        width_before_the_ask_for_chat_gpt:"493px",
            // second div ask chatgpt div
            width_of_the_ask_chat_gpt_div:'530px',
        // 3rd box like input box in the ask for chatgpt main scrolling box
            // input box
            input_changing_width_main_div:'550px',
            first_input_changing_width:"500px",
             // width of the icon box in the input
           width_of_the_icon_sub_box:"30px",

        // 2nd scrolling box open ai ist space box
          width_of_the_open_ai_1st_box:"650px",  
          
          // space beside the a new series of ai model designed  to spend more time to spend thinking before they respond
           width_of_space_beside_the_a_new_series_text:"468px",
          //  width of the main text ai model designed to spend more time to spend thinking before
          width_of_the_main_text_ai_model_designed_to_spend:"600px",
          // width_of_the space beside  respond  div
           width_of_the_spaec_beside_the_respond_div:"720px",
            //  width_of_the_space_beside_learn_more
            width_of_the_space_beside_learn_more:"700px",
            // width of the learn more text
            text_width_of_learn_more:"122px",
            // width of the (chatgpt on your desktop ) texta area in the scrolling div.
            width_of_the_chatgpt_on_your_desktop:"800px",
            width_besdie_the_chatgpt_on_your_desktop:"500px",
            // width of the space beside the a chat about mail 3rd box text
            width_of_space_beside_the_achataboutmail_3rd_box_text:"520px",

            //space beside the button div
            space_box_beside_the_main_box:"700px",
             // after the button first box scrollable box\
          // width of the 1st box 2nd 3rd,4th,5th scrolable main box and 
          // and the width od the fotter upside box
          // and footer box
          // fooer below box insta  icon...ect

          width_of_the_main_chatgpt_box:"1650px",
            // width of the innerbox
            width_of_the_inner_chatgpt_box:"1303px",
            // width of the chatgpt text
            width_of_the_chat_gpt_text:"108px",
            //  width_of_the_first_scrolable_div
             width_of_the_first_scrollable_div:"1532px",
            //  width of the startin blank box div
            width_of_the_start_blnk_box_div:"230px",
            //  width of the box div
            width_of_the_every_equalent_bxes:"353px",
            // the width for the space which is allocated mddle of the icons and the chatgpt text
            the_width_of_space_which_is_located_between_chatgpt_and_the_icons:"870px",
             
            // fotter upside box instant answer greater  productivity.endless inspiration
                 //  it is also used for the width of the boxs which is inside box,: inswer greter productivity endless inspiration
             width_of_the_inner_box_in_thefotterUpsid_box: "1050px",
                    //  width  of the footer exact text instant answer.Greater
                    width_of_the_instant_answer_greater:"400px",
                    //  width  of the footer productivity,endless inspiration
                    width_of_the_productivity_endless_inspiration:"1046px",

                   // try chat gpt div 
                  //  the space beside the try chatgpt text
                   width_of_the_space_beside_tryCHATGPT:"453px",
                   width_of_the_trychatgpt_button_text:"146px",

                  //  footer
                  // fotter inside box:
                  //  another box which is below the fotter used for icons like insta etc..


                  inner_footer_box:'1060px',
                  // width of the  our reserch& latest advancements div , chatgpt api& explore  more div, saftey overview ,company div, terms and polices div
                  width_of_the_reserch_explore_saftey_company_terms_and_polices:'206px',
                   //  width of the language box  below the footer
                   width_of_the_lang:"133.8px",
                   // and  the width  of the openai @2024-25  in the fotter below box
                   width_of_the_openai:'152.217px',

                  //  english width
                  width_of_the_english_word:'93px',

                  // width of the space in the last box,beside the english and the open ai
                  width_of_the_spacebox_beside_the_english_and_openAI:"600px", 


      // width of the  next  file saftey.html
      // 352px

      // width of the 1st box of the we believ in the ais potential
      width_of_the_1st_box_of_the_we_believ_in_the_ais_potential:"300px",
      // content box or the text box or 2nd box of the we believ in ais potential
       the_text_box_or_2nd_boxof_the_we_believ_in_ais_potential:"1000px",
      // width of the 3rd box of the we believ in the ais potential
      width_of_the_3srd_box_of_the_we_believ_in_the_ais_potential:"300px",
       
      // width of the 1st box leading the way in saftey
      width_of_the_1st_box_leading_the_way_in_saftey:"400px",
      // width of the 2nd box leading the way in saftey:text:box
      width_of_the_2nd_box_leading_the_way_in_saftey:"800px",
      // width of the 3rd box leading the way in saftey:text:box
         width_of_the_3rd_box_leading_the_way_in_saftey:"300px",
      

        //  we collabrate with industry leaders
        //  width the1st box we collabrate with industry below the eading the way  in saftey
        width_the_1stBox_we_collabrate_with_industry_below_the_leading_the_way_in_saftey:"500px",
        //  width the  2nd box  we collabrate with industry below the eading the way  in saftey
         width_the_2ndBox_we_collabrate_with_industry_below_the_leading_the_way_in_saftey:"1000px",
        //  width the  3rd box  we collabrate with industry below the eading the way  in saftey
         width_the_3rd_Box_we_collabrate_with_industry_below_the_leading_the_way_in_saftey:"500px",

        // conversation with open ai reserchers(below the boxes called  child saftey ,private information deep fakes bias elections)
        // 1stconversation with open ai reserchers(below the boxes called  child saftey ,private information deep fakes bias elections)
        width_1stBOX_conversation_with_open_ai_reserchers:"300px",
        // 2ndconversation with open ai reserchers(below the boxes called  child saftey ,private information deep fakes bias elections)
        width_2ndtBOX_conversation_with_open_ai_reserchers:"1000px",
        // 3rdconversation with open ai reserchers(below the boxes called  child saftey ,private information deep fakes bias elections)
        width_3rdBOX_conversation_with_open_ai_reserchers:"300px",


        //  get inside Open ai with our series that breaks down a range of topics around saftey and more.
      //  1st box get inside Open ai with our series/main text (after the  conversation with open ai reserchers)
      width_1st_box_get_inside_Open_ai_with_our_series:"400px",

      //  2nd box get inside Open ai with our series/main text (after the  conversation with open ai reserchers)
       width_2nd_box_get_inside_Open_ai_with_our_series:"800px",

      //  3rd box get inside Open ai with our series (after the  conversation with open ai reserchers)
      width_3rd_box_get_inside_Open_ai_with_our_series:"400px",

      // after the video box,main box of latest news on saftey text
      // &&
      // go_deeper_on_saftey 

      // 1st after the video box,main box of latest news on saftey text
      width_1st_after_the_video_box_main_box_of_latest_news_on_saftey_text:"300px",
      // 2nd after the video box,main box of latest news on saftey text
      width_2nd_after_the_video_box_main_box_of_latest_news_on_saftey_text:"1000px",
      // 3rd after the video box,main box of latest news on saftey text
      width_3rd_after_the_video_box_main_box_of_latest_news_on_saftey_text:"300px",


       // width of the (after the text of latest news on text) main 3 boxes  -->
      
        width_of_the_first_and_last_box_of_3boxes_except_3b:"230px",
        width_of_of_3boxes:"353px",


      // total 8 boxes after the go deeper on saftey
      // 1st and the last box which is same for all the box
      width_of_the_first_and_last_box_of_8boxes:"230px",
        // middlebox _width_for_all_the 8boxes
         middlebox_width_for_all_the_8boxes:"1100px",
        //  text boex --> //8boes text  width
         open_ai_system_text_box:"950px",
        //  learn more box 
        learn_more_box:"150px",

      

        //  5 boxes which contain a child saftey,private information,deep fakes bias,election 

        // second box which have the content 
         width_second_box_which_have_the_content:"1310px",
        //1st box child saftey, private information deep fakes bias, election in 5box
        width1st_box_child_saftey_so_on_in_box:"352px",
        //  third box which is blank 
        third_box_which_is_blank:"210px",















        







            


       },

       backgroundImage:{
        // open ai image
        openai:"url('./OpenAi.svg')",
        chatgptimage1:"url('https://images.ctfassets.net/kftzwdyauwt9/21GoFN3USoFH1VE6ERRD4g/b6934085e667c97956fcfde5db305a99/Search_Card.png?w=750&q=90&fm=webp')",
        chatgptimage2:"url('https://images.ctfassets.net/kftzwdyauwt9/3AqcHnbr83HdNA15e6Va2k/1edb01c8fc6ead20c09cdbe00b5ad8e9/o1-preview-general-blogcard-big.png?w=750&q=90&fm=webp')",
        chatgptimage3:"url('https://images.ctfassets.net/kftzwdyauwt9/1ZTOGp7opuUflFmI2CsATh/df5da4be74f62c70d35e2f5518bf2660/ChatGPT_Carousel1.png?w=640&q=90&fm=webp')",
        chatgptimage4:"url('https://images.ctfassets.net/kftzwdyauwt9/6AqM3OiAOBR6w0peED8KOu/ea883392233df7ada5aa70c9ca5a4e54/wriitng_with_AI.png?w=640&q=90&fm=webp')",
        chatgptimage5:"url('https://images.ctfassets.net/kftzwdyauwt9/4uMG8AuQre4G4zXy6jLIpk/a393d8838bff23a44a22db247954da7e/updated_team-1.png?w=640&q=90&fm=webp')",
        chatgptimage6:"url('https://images.ctfassets.net/kftzwdyauwt9/3XDJfuQZLCKWAIOleFIFZn/14b93d23652347ee7706eca921e3a716/enterprise.png?w=640&q=90&fm=webp')",
        chatgptimage7:"url('https://images.ctfassets.net/kftzwdyauwt9/2ZJmwm7FLSmjnnyqQIuFNY/a34114c80379cf2b84cf6e28332c21ce/Canvas_Card.png?w=750&q=90&fm=webp')",
        chatgptimage8:"url('https://images.ctfassets.net/kftzwdyauwt9/1Z0M6ufSdYcPF5A81sC4fU/47939ee3603d1a1013425d8cdd4ef63a/SearchGPT_Card_Asset.png?w=640&q=90&fm=webp')",
        chatgptimage9:"url('https://images.ctfassets.net/kftzwdyauwt9/5lNQzWhib9JZvKJognmB70/01092aa3e849f428bd1d5579c7c7c53b/Mac_App_Card.png?w=640&q=90&fm=webp')",
        chatgptimage10:"url('https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=640&q=90&fm=webp')",
        chatgptimage11:"url('https://images.ctfassets.net/kftzwdyauwt9/1qCEfO78yhwFeaBFu3kCd6/b57a627f10f4a353443994ed06453056/ChatGPT_Education.png?w=640&q=90&fm=webp')",
        chatgptimage12:"url('https://images.ctfassets.net/kftzwdyauwt9/3vjzQxExAEnYGvBSiwT1zK/d76028c004dbc7e9830e541cced6224f/ChatGPT_Charts_Blog_Hero.png?w=640&q=90&fm=webp')",
      //  research
      reserchImage1:"url('https://images.ctfassets.net/kftzwdyauwt9/bgJUZGtbvelVjCeoIjfUl/5e78175b7f7324d72f20927df2c3424d/o1-research-blogcard.png?w=640&q=90&fm=webp')",
      reserchImage2:"url('https://images.ctfassets.net/kftzwdyauwt9/5A2q2muFYadzc0qwKP4876/b22dee915557d7397e2850690a49af87/o1-system-card-blogcard.png?w=640&q=90&fm=webp')",
      reserchImage3:"url('https://images.ctfassets.net/kftzwdyauwt9/X6C9WdheadoN2CrEsCfEZ/6502225118173e6f7008543b37e413e1/OAI_Systems_Blog_Card.png?w=640&q=90&fm=webp')",
      reserchImage4:"url('https://images.ctfassets.net/kftzwdyauwt9/3vA8jsIso6CRsO8296SxLi/f120c0f762cfa4614ff87de2ade85e0e/gpt-4o-mini_card_image-updated.png?w=640&q=90&fm=webp')",
      reserchImage5:"url('https://images.ctfassets.net/kftzwdyauwt9/6Viz8iK1yGb6sLmiAGSI7T/49da64d0369f457d3c022c0a0b17ba71/DALL_E_2024-04-06_16.58_4.png?w=640&q=90&fm=webp')",
      reserchImage6:"url('https://images.ctfassets.net/kftzwdyauwt9/6NQjnJSOqEbjpPOrdaQD8z/d6f19d55e190ccf81e5d5db513425cf3/legibility_blog_card.png?w=640&q=90&fm=webp')",
      reserchImage7:"url('https://images.ctfassets.net/kftzwdyauwt9/51cvGC9YL1Fy2Iflb3KkDb/a8a9db1572e0bb7009f09a9b39aeafe9/GPT-4o-Video_Card.png?w=750&q=90&fm=webp')",
      // reserchImage8:"url('')",
      reserchImage9:"url('https://images.ctfassets.net/kftzwdyauwt9/5zFIncfIW0tcpLLslTVZyr/021f3e3a8cf7d5e6ff78600f304a2b70/Building-an-early-warning-system-for-LLM-aided-biological-threat-creation.jpg?w=640&q=90&fm=webp')",
      reserchImage10:"url('https://images.ctfassets.net/kftzwdyauwt9/dfdeca52-d054-4ce9-18d684209ff9/f3a2e6e71ebefb70fca386ff7bbb9d92/practices-for-governing-agentic-ai-systems.jpg?w=640&q=90&fm=webp')",
      reserchImage11:"url('https://images.ctfassets.net/kftzwdyauwt9/6Lw2ICzVMz56SHUabause2/db76183c01bd7510c2a049c010a87426/the-latest-milestone-in-openai-s-effort-in-scalling-up-deep-learning.jpg?w=640&q=90&fm=webp')",
      reserchImage12:"url('https://images.ctfassets.net/kftzwdyauwt9/2b8LxVBYdWfAji39UNft8X/09d9453f41b461c6e1f225be249de9d2/GPT-4V_ision__system_card.jpg?w=640&q=90&fm=webp')",
      //  bussiness
      bussinessImage1:"url('https://images.ctfassets.net/kftzwdyauwt9/4YcfHUbF5aXPEYiKbS1yP5/6f480fd98bc6ead1cd6cac46f4bf68d9/explore_ai_solutions_for_companies_of_all_sizes.jpg?w=640&q=90&fm=webp')",
      bussinessImage2:"url('https://images.ctfassets.net/kftzwdyauwt9/1og20QPrDYssv1fnRasbXW/af144bf758f510bf28b1c0da911fbcdf/empower_your_entire_workforce_with_enterprise_grade_ai.jpg?w=640&q=90&fm=webp')",
      bussinessImage3:"url('https://images.ctfassets.net/kftzwdyauwt9/ZW0BGMvnWV1Li8uIrym3x/170893a2921cb25bb77b27b9d2d84067/updated_team-2.png?w=640&q=90&fm=webp')",
      bussinessImage4:"url('https://images.ctfassets.net/kftzwdyauwt9/54Yl51mnEttF83c6fZBNv9/41cbdd41a9dd05e710ee861b98ac1a51/integrate_models_into_products_tools_or_operations.jpg?w=640&q=90&fm=webp')",
      bussinessImage5:"url('https://images.ctfassets.net/kftzwdyauwt9/R9V8ddGqzERPQ3b7sXTXt/85cc124200e4c69051f90368f0405fb6/discuss_custom_solutions_for_your_company.jpg?w=640&q=90&fm=webp')",
      bussinessImage6:"url('https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=640&q=90&fm=webp')",
      // bussinessImage7:"url('')", 
      // for developers
      developersImage1:"url('https://images.ctfassets.net/kftzwdyauwt9/139I6Ga8xl6qTXGPL9lWyc/82838b1ef1a26a4946a27d656de0c806/01_Realtime_API.png?w=640&q=90&fm=webp')", 
      developersImage2:"url('https://images.ctfassets.net/kftzwdyauwt9/3no98Bze1KP8jLc4t2bEYc/e41bd6427baec73e988972b2723fe555/02_Vision_Fine-tuning.png?w=640&q=90&fm=webp')",     
      developersImage3:"url('https://images.ctfassets.net/kftzwdyauwt9/2STrOu0d3xz2yHksnLDGNg/54c78f54d3357e7f626fa9a74bad80c7/03_Prompt_Caching.png?w=640&q=90&fm=webp')", 
      developersImage4:"url('https://images.ctfassets.net/kftzwdyauwt9/WAfhxKn1jlwPcmkHH4sl6/5e82e35f685a447799791a1f777a9e24/04_Model_Distillation.png?w=640&q=90&fm=webp')", 
      developersImage5:"url('https://images.ctfassets.net/kftzwdyauwt9/1Q36rezJbyC7l7KEhDLm1D/8df88b51a23d7b2164f65cc1c9e3e8bb/o1-mini-research-blogcard.png?w=640&q=90&fm=webp')",     
      developersImage6:"url('https://images.ctfassets.net/kftzwdyauwt9/1XeXlBlWdUBSPFcVPsOmOD/dc8123f1031a0f9fe1b816790ee510a9/Structured_Outputs_Cover.png?w=640&q=90&fm=webp')", 
      developersImage7:"url('https://images.ctfassets.net/kftzwdyauwt9/3qxnep8UZm6mNuXeEY6OxW/41a11c729769d54ce18954040b3dfce0/start-building-and-api-call.jpg?w=640&q=90&fm=webp')", 
      developersImage8:"url('https://images.ctfassets.net/kftzwdyauwt9/5OC4WpbaPBOZkg2Wmx1kV6/dd4a619a9efc1a86e62c1c089cdf9213/get-up-and-running-with-ourapi.jpg?w=640&q=90&fm=webp')",     
      developersImage9:"url('https://images.ctfassets.net/kftzwdyauwt9/7i9gjVSZuEn0yoN8rbG3KR/1dc876729a6b7a4baafbc4a848055e81/guides.gif?w=640&q=90&fm=webp&fit=pad')", 
      developersImage10:"url('https://images.ctfassets.net/kftzwdyauwt9/276ZCBF00jyAWYSLvNC4bh/1f7b896a1941e789c4df9d3ef9d441bb/let-your-imagination-run-wild.jpg?w=640&q=90&fm=webp')", 
      developersImage11:"url('https://images.ctfassets.net/kftzwdyauwt9/276ZCBF00jyAWYSLvNC4bh/1f7b896a1941e789c4df9d3ef9d441bb/let-your-imagination-run-wild.jpg?w=640&q=90&fm=webp')",     
      developersImage12:"url('https://images.ctfassets.net/kftzwdyauwt9/33Kmhbjg6Oo2lsalSssMw9/f863de71ee49599b6b2b5865527a7158/Explore_what_s_possible_with_the_Cookbook.jpg?w=640&q=90&fm=webp')", 
      // stories
      storiesImage1:"url('https://images.ctfassets.net/kftzwdyauwt9/2CCSJ5LN5mOP5D5VpFlyJX/ea198cc4537c7542a9c56e4278121c06/Decagon_Blog_Card.png?w=640&q=90&fm=webp')",
      storiesImage2:"url('https://images.ctfassets.net/kftzwdyauwt9/egPDOANyZZmQQwQgcEEqE/8a674e39d520c3df1ffde2cacbadbaba/oai_altera_thumbnail.png?w=640&q=90&fm=webp')",
      storiesImage3:"url('https://images.ctfassets.net/kftzwdyauwt9/4feBd9mET2qUWGpGtdit6G/c23919743af1df1b3701944f3b346004/oai_minnesota_thumbnail.png?w=640&q=90&fm=webp')",
      storiesImage4:"url('https://images.ctfassets.net/kftzwdyauwt9/1brzc2cy3iOKKjeOFRe3WI/70d257cb9dba2df9ebb460b37b3ac316/oai_mercado_thumbnail.png?w=640&q=90&fm=webp')",
      storiesImage5:"url('https://images.ctfassets.net/kftzwdyauwt9/5yh8gTLhVFcUsY9Nj0O02v/7e338c54ba2caf2768a0a791ebd67e99/OAI_Genmab_Blog_Card.png?w=640&q=90&fm=webp')",
      storiesImage6:"url('https://images.ctfassets.net/kftzwdyauwt9/2B3BwVWKEvWadO4ceyIeV2/f25f780834f5f17bfab9b6f83955b2e5/oai_arco_thumbnail.png?w=640&q=90&fm=webp')",
      storiesImage7:"url('https://images.ctfassets.net/kftzwdyauwt9/5mzHFZpnhcgSTQQkkKQFD6/e6193143c13e2a8bd3889f8807ab7bad/OAI_Ada_Blog_Card.png?w=640&q=90&fm=webp')",
      storiesImage8:"url('https://images.ctfassets.net/kftzwdyauwt9/4X3HwsNsncluAzNEqlXFg3/7b814d53b28adc8326967337c9952b25/oai_lowes_card.jpg?w=640&q=90&fm=webp')",
      // news
      newsImage1:"url('https://images.ctfassets.net/kftzwdyauwt9/21GoFN3USoFH1VE6ERRD4g/b6934085e667c97956fcfde5db305a99/Search_Card.png?w=750&q=90&fm=webp')",
      newsImage2:"url('https://images.ctfassets.net/kftzwdyauwt9/3AqcHnbr83HdNA15e6Va2k/1edb01c8fc6ead20c09cdbe00b5ad8e9/o1-preview-general-blogcard-big.png?w=750&q=90&fm=webp')",
      newsImage3:"url('https://images.ctfassets.net/kftzwdyauwt9/2ZJmwm7FLSmjnnyqQIuFNY/a34114c80379cf2b84cf6e28332c21ce/Canvas_Card.png?w=750&q=90&fm=webp')",
      newsImage4:"url('https://images.ctfassets.net/kftzwdyauwt9/1Z0M6ufSdYcPF5A81sC4fU/47939ee3603d1a1013425d8cdd4ef63a/SearchGPT_Card_Asset.png?w=640&q=90&fm=webp')",
      newsImage5:"url('https://images.ctfassets.net/kftzwdyauwt9/2CPrXUZS0yLGo894hU24zv/b9e1759c6f213a8888e17852266c515b/apple-art-2a-3x4.jpg?w=640&q=90&fm=webp')",
      newsImage6:"url('https://images.ctfassets.net/kftzwdyauwt9/2oOdYlEm4NHQCiqTsStMuD/ffe7260fb16cac11a570313b78cec8b8/DALL_E_2024-05-06_19.10.23.webp?w=640&q=90&fm=webp')",
      newsImage7:"url('https://images.ctfassets.net/kftzwdyauwt9/iMbo3U5LJBXTSvvfMAtFB/74de576fa7c2e1683f8d3aa26771d67b/Le_Monde_and_Prisa_Media.jpg?w=640&q=90&fm=webp')",
      // newsvideo8:"url('')",
      newsImage9:"url('https://images.ctfassets.net/kftzwdyauwt9/6h9RXR3oEntutFBLAjVaEc/436a3018e3948ab70dbe82a54220a711/Introducing-improvements-to-the-fine-tuning-API-and-expanding-our-custom-models-program.jpg?w=640&q=90&fm=webp')",
      newsImage10:"url('https://images.ctfassets.net/kftzwdyauwt9/1eZQ3ygMG9qrQRjycDmQIE/53c901d8d2fa24bb6ee2c1e8166a13f2/OpenAI-announces-new-members-to-board-of-directors.jpg?w=640&q=90&fm=webp')",
      newsImage11:"url('https://images.ctfassets.net/kftzwdyauwt9/3u7r7E3gFRGZIxdKucf7f6/fea2b25e91c1f53a0e3f839a18c1caae/Navigating_the_Challenges_and_Opportunities_of_Synthetic_Voices.jpg?w=640&q=90&fm=webp')",
      newsImage12:"url('https://images.ctfassets.net/kftzwdyauwt9/f50ce1d2-4f61-4ed2-e560c624d631/6f4dd4542898a35d0a91b137f85c9834/Democratic_inputs_to_AI_grant_program_lessons_learned_and_implementation_plans.jpg?w=640&q=90&fm=webp')",
      


    //  next file saftey.html
           // image of the (after the text of latest news on text) main 3 boxes  -->
           image1:"url('https://images.ctfassets.net/kftzwdyauwt9/2jNGSREx3U99nkHYRZaViq/3d1e9e83fe937b6a63d432ce79f586b9/cover_image_-_update_on_disrupting.png?w=640&q=90&fm=webp')",
           image2:"url('https://images.ctfassets.net/kftzwdyauwt9/54pUOkZ0poSpo9udfZmN3g/e90a4235b3d8537bdddfcc7219b636d1/safety-blog-cover-02.jpg?w=640&q=90&fm=webp')",
           image3:"url('https://images.ctfassets.net/kftzwdyauwt9/1F9YYY34lTeNq289xLAF6G/097bda3f5ef7b71943baada651f4b09f/abstract-pastel.jpg?w=640&q=90&fm=webp')",


       //5boxes election icon
       imageelection:"url('https://images.ctfassets.net/kftzwdyauwt9/1PoGkIzZmwalnlQFuKbmAS/b3df5f5e961263f7109c64231e56adbd/Elections_dark.svg?w=1920&q=80')",
       imagebias:"url(https://images.ctfassets.net/kftzwdyauwt9/20sSwegy2GyrEz841RLHK3/ed42105ffd9b12fd6f95ce7052c0ab80/Bias_dark.svg?w=1920&q=80)",
       deepfakes:"url('https://images.ctfassets.net/kftzwdyauwt9/2AAZSQ1zUEELbNBkBMHoEq/74f00c72a1b0d2605805405e084d8556/Deep_Fakes_dark.svg?w=1920&q=80')",
       privateinformation:"url('https://images.ctfassets.net/kftzwdyauwt9/5Lp30X1gpeXxObWCZsXSB3/ef755ed56841ed2cf24e1a8ff37d314d/Private_Information_dark.svg?w=1920&q=80')",
       childsaftey:"url('https://images.ctfassets.net/kftzwdyauwt9/6gEEhbMvCxSCqrrie1SygA/35944d648c8d781ef4d19b0c8e502b56/Child_Safety_dark.svg?w=1920&q=80')",


    // the image when i hover the reserch and so on in the navbar
        imagevisible_hover_reseerch:"url('https://images.ctfassets.net/kftzwdyauwt9/66geD9TN0yF0t0UuuymGCo/8cb181663f1b02b40e06f139fb22033d/o1-research.png?w=1920&q=90&fm=webp')",












       },
       fontSize:{
        // font size for the  ask chatgpt for anything in the scrooling box after the navbar
        fontSize_of_ask_chat_gpt_in_the_scrooling_first_box:"45px",
        //  saftey.html new file
            // font of the we believ in the ai 's potential (After the saftey at every step)
            font_of_the_we_believ_in_the_ais_potential:"33px",
            // font of get inside Open ai with our series that breaks down a range of topics around saftey and more.
           font_of_get_insid_Open_ai_with_our_series:"19px",

                 // go_deeper_on_saftey 
          //  text content box after the video box,main box of latest news on saftey text
           fontsizez_2nd_after_the_video_box_main_box_of_latest_news_on_saftey_text:"53px",
            



       },
       backgroundColor:{
        // color of the first scroll box
        //  and for the instant answer ,greater productivity.endlesss inspiration box
        //  and it is used in the  saftey.html  8 boxes after go deeper on saftey
         // 5 boxes bg-color in the safe.html
        //  it is used in the button  (teaching chatgpt good behaviour) in the saftey.html , when i hover the box it should be visible
        // saftey.html it is used in the 3 boxes teach test share
        first_scroll_color:"rgb(23,23,23)",
        // saftey.html it is used in the plus circle background
        input_box_color:"rgb(51,51,51)",
        color_of_the_icon_box:"rgb(75 75 75)",
        // safety.html it  is used for the cicle in the 3 box
        main_heading_color_in_footer:"rgb(172,172,172)",

       },
       colors:{
        color_of_the_icon:"rgb(51,51,51)",
        //  footer box which is main heading 
        // && the saftey flie main heading answers 
        main_heading_color_in_footer:"rgb(172,172,172)",

       },
      borderRadius:{
        border_radius_of_learn_more:"18px",
      },

      keyframes:{
        circlet1:{
        '0%,100%':{transform:'translateY(0)' },
        '25%':{transform:'translateY(-90px)'},
        '50%':{transform:'translateY(100px)'}
        },


        circlet2:{
          '0%,100%':{transform:'translateY(0)'},
          '25%':{transform:'translateY(-90px)'},
          '50%':{transform:'translateY(100px)'},
        },

        // circletred: h-[400px] w-[400px]{
        //    '0%,100%':{transform:'translateY(0)'},
        //    '25%':{transform:translateY("-30px")},
        //    '50%':{transform:translateY("40px")},
        // }
        box1square:{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(100px)'},
        },

        box2square:{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(100px)'},
        },
      },

      animation:{
        circle1:'circlet1 2s ease-in-out 0.1s 1',
        circle2:'circlet2 2s ease-in-out 2s',
        box2green:'box2square 2s ease-in-out 0s 2',
        box1red:'box1square 2s ease-in-out 1.3s 2',

        // circlewrong:'circletred 2s ease-in-out 7s',
      },

      

      

    






    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({addUtilities}){
      // addUtilities({
        
      // })

    },
    require('tailwind-clip-path'),
   ],
}
