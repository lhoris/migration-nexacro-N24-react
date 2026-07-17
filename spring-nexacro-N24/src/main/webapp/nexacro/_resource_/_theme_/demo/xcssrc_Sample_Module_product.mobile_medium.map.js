(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #A598EF")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_Bg1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DEDEDE")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_combo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DEDEDE")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_titlebar" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #A598EF"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_calback" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #af90cf")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_calyear" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px Tahoma"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_prop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3"),
            									"color" : nexacro.ColorObject("#111111")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_WF_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_close.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_close.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_close.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_close.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calprev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calnext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calprev_year" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calprev_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calnext_year" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL('imagerc::CustomCalendar/btn_WF_Calnext_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calFind" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_O.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Calendar_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Drop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_basic" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #517EB7")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month01.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month02.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month03.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month04.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month05.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month06.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal07" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month07.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal08" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month08.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal09" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month09.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal10" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month10.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal11" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month11.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_cal12" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12P.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12P.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12P.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::FromToCalendar/img_WF_month12.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_today" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3"),
            									"color" : nexacro.ColorObject("#111111")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3"),
            									"color" : nexacro.ColorObject("#111111")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #A0A1A3")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_radio_select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\""),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\""),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_radio_notselect" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\""),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"font" : nexacro.FontObject("14px \"Noto Sans KR Regular\""),
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"class" :
            				[
            					{
            						"edt_WF_Cbo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 30px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("13px \"Noto Sans KR Regular\"")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("0px 45px 0px 30px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("13px \"Noto Sans KR Regular\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340")
            								},
            								"disabled" :
            								{
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#aeaeae")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Grid" :
            			{
            				"class" :
            				[
            					{
            						"grd_WF_Cbo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("13px \"Noto Sans KR Regular\"")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_customCalendar" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8776E8")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_WF_Cbo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            															"color" : nexacro.ColorObject("#333333")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_customCalendar" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_check" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#555555"),
            															"border" : nexacro.BorderObject("1px solid #E2E2E3,0px none")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#555555"),
            															"border" : nexacro.BorderObject("1px solid #E2E2E3,0px none")
            														},
            														"mouseover" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_sunday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_customCalendar" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#FA758C")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_saturday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_customCalendar" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#56AFFF")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"Combo" :
            			{
            				"class" :
            				[
            					{
            						"cmb_WF_calendar" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #8473E3")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #8473E3")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"class" :
            						[
            							{
            								"cmb_WF_calendar" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop.png')")
            										},
            										"pushed" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop.png')")
            										},
            										"selected" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop.png')")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop_O.png')")
            										},
            										"focused" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop_O.png')")
            										},
            										"disabled" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::CustomCalendar/btn_WF_calDrop.png')")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"class" :
            						[
            							{
            								"cmb_WF_calendar" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("bold 14px \"Noto Sans KR Regular\"")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
