(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Grid" :
            			{
            				"class" :
            				[
            					{
            						"NxPivot_grid" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7")
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
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"NxPivot_grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            															"color" : nexacro.ColorObject("#283757"),
            															"border" : nexacro.BorderObject("0px none, 1px solid #c7c7c7, 1px solid #c7c7c7, 1px solid #c7c7c7"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														}
            													}
            												}
            											},
            											{
            												"NxPivot_popup_grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#283757"),
            															"font" : nexacro.FontObject("normal 12px/normal \"굴림\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"NxPivot_grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#999999")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"NxPivot_grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px Gulim"),
            															"color" : nexacro.ColorObject("#222222")
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
            						"cell_drilldown_close" :
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
            													"self" :
            													{
            														"disabled" :
            														{
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            															"color" : nexacro.ColorObject("#222222")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_drilldown_open" :
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
            													"self" :
            													{
            														"disabled" :
            														{
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            															"color" : nexacro.ColorObject("#222222")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_total" :
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
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            														},
            														"disabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            														}
            													}
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
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"NxPivot_grid" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c8c1c2, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"NxPivot_toolbarArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
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
            						"NxPivot_axisArea_title_fields" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_title_colAxis" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_title_rowAxis" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_title_values" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_setListPopup_line" :
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
            						"NxPivot_axisArea_item" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b7bd")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_name" :
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
            						"NxPivot_axisArea_item_asc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_drag_indicator" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"edge" : nexacro.EdgeImageObject("URL(\"imagerc::img_pvGrd_guideArrow.png\") 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_desc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_filter" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_sum" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_func" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_avg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_cnt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_aggregator_max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_popup_subtitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_setListPopup_list" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"NxPivot_setListPopup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_popup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
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
            						"NxPivot_toolbarButton_show" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_hide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_rowstatus_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_colstatus_collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_rowstatus_expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_colstatus_expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_auto" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_manual" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_init" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_toolbarButton_execute" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e75e4e")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_axisArea_item_setting" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_popup_submit" :
            						{
            							"self" :
            							{
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"NxPivot_popup_close" :
            						{
            							"self" :
            							{
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"border" : nexacro.BorderObject("1px solid #424242")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"border" : nexacro.BorderObject("1px solid #424242")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"border" : nexacro.BorderObject("1px solid #424242")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"border" : nexacro.BorderObject("1px solid #424242")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"border" : nexacro.BorderObject("1px solid #424242")
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
            						"NxPivot_popup_combo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"class" :
            						[
            							{
            								"NxPivot_popup_combo" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 12px/normal \"굴림\""),
            											"padding" : nexacro.PaddingObject("0px")
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
