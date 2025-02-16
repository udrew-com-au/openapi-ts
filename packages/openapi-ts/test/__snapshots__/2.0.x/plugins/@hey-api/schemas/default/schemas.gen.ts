// This file is auto-generated by @hey-api/openapi-ts

export const CommentWithBreaksSchema = {
    description: `Testing multiline comments in string: First line
Second line

Fourth line`,
    type: 'integer'
} as const;

export const CommentWithBackticksSchema = {
    description: 'Testing backticks in string: `backticks` and ```multiple backticks``` should work',
    type: 'integer'
} as const;

export const CommentWithBackticksAndQuotesSchema = {
    description: `Testing backticks and quotes in string: \`backticks\`, 'quotes', "double quotes" and \`\`\`multiple backticks\`\`\` should work`,
    type: 'integer'
} as const;

export const CommentWithSlashesSchema = {
    description: 'Testing slashes in string: \\backwards\\\\\\ and /forwards/// should work',
    type: 'integer'
} as const;

export const CommentWithExpressionPlaceholdersSchema = {
    description: 'Testing expression placeholders in string: ${expression} should work',
    type: 'integer'
} as const;

export const CommentWithQuotesSchema = {
    description: `Testing quotes in string: 'single quote''' and "double quotes""" should work`,
    type: 'integer'
} as const;

export const CommentWithReservedCharactersSchema = {
    description: 'Testing reserved characters in string: /* inline */ and /** inline **/ should work',
    type: 'integer'
} as const;

export const SimpleIntegerSchema = {
    description: 'This is a simple number',
    type: 'integer'
} as const;

export const SimpleBooleanSchema = {
    description: 'This is a simple boolean',
    type: 'boolean'
} as const;

export const SimpleStringSchema = {
    description: 'This is a simple string',
    type: 'string'
} as const;

export const NonAsciiStringæøåÆØÅöôêÊ字符串Schema = {
    description: 'A string with non-ascii (unicode) characters valid in typescript identifiers (æøåÆØÅöÔèÈ字符串)',
    type: 'string'
} as const;

export const SimpleFileSchema = {
    description: 'This is a simple file',
    format: 'binary',
    type: 'string'
} as const;

export const SimpleReferenceSchema = {
    description: 'This is a simple reference',
    '$ref': '#/definitions/ModelWithString'
} as const;

export const SimpleStringWithPatternSchema = {
    description: 'This is a simple string',
    type: 'string',
    maxLength: 64,
    pattern: '^[a-zA-Z0-9_]*$'
} as const;

export const EnumWithStringsSchema = {
    description: 'This is a simple enum with strings',
    enum: ['Success', 'Warning', 'Error', "'Single Quote'", '"Double Quotes"', 'Non-ascii: øæåôöØÆÅÔÖ字符串']
} as const;

export const EnumWithNumbersSchema = {
    description: 'This is a simple enum with numbers',
    enum: [1, 2, 3, 1.1, 1.2, 1.3, 100, 200, 300, -100, -200, -300, -1.1, -1.2, -1.3]
} as const;

export const EnumFromDescriptionSchema = {
    description: 'Success=1,Warning=2,Error=3',
    type: 'number'
} as const;

export const EnumWithExtensionsSchema = {
    description: 'This is a simple enum with numbers',
    enum: [200, 400, 500],
    'x-enum-varnames': ['CUSTOM_SUCCESS', 'CUSTOM_WARNING', 'CUSTOM_ERROR'],
    'x-enum-descriptions': ['Used when the status of something is successful', 'Used when the status of something has a warning', 'Used when the status of something has an error']
} as const;

export const ArrayWithNumbersSchema = {
    description: 'This is a simple array with numbers',
    type: 'array',
    items: {
        type: 'integer'
    }
} as const;

export const ArrayWithBooleansSchema = {
    description: 'This is a simple array with booleans',
    type: 'array',
    items: {
        type: 'boolean'
    }
} as const;

export const ArrayWithStringsSchema = {
    description: 'This is a simple array with strings',
    type: 'array',
    items: {
        type: 'string'
    }
} as const;

export const ArrayWithReferencesSchema = {
    description: 'This is a simple array with references',
    type: 'array',
    items: {
        '$ref': '#/definitions/ModelWithString'
    }
} as const;

export const ArrayWithArraySchema = {
    description: 'This is a simple array containing an array',
    type: 'array',
    items: {
        type: 'array',
        items: {
            '$ref': '#/definitions/ModelWithString'
        }
    }
} as const;

export const ArrayWithPropertiesSchema = {
    description: 'This is a simple array with properties',
    type: 'array',
    items: {
        type: 'object',
        properties: {
            foo: {
                type: 'string'
            },
            bar: {
                type: 'string'
            }
        }
    }
} as const;

export const DictionaryWithStringSchema = {
    description: 'This is a string dictionary',
    type: 'object',
    additionalProperties: {
        type: 'string'
    }
} as const;

export const DictionaryWithReferenceSchema = {
    description: 'This is a string reference',
    type: 'object',
    additionalProperties: {
        '$ref': '#/definitions/ModelWithString'
    }
} as const;

export const DictionaryWithArraySchema = {
    description: 'This is a complex dictionary',
    type: 'object',
    additionalProperties: {
        type: 'array',
        items: {
            '$ref': '#/definitions/ModelWithString'
        }
    }
} as const;

export const DictionaryWithDictionarySchema = {
    description: 'This is a string dictionary',
    type: 'object',
    additionalProperties: {
        type: 'object',
        additionalProperties: {
            type: 'string'
        }
    }
} as const;

export const DictionaryWithPropertiesSchema = {
    description: 'This is a complex dictionary',
    type: 'object',
    additionalProperties: {
        type: 'object',
        properties: {
            foo: {
                type: 'string'
            },
            bar: {
                type: 'string'
            }
        }
    }
} as const;

export const DateSchema = {
    description: 'This is a type-only model that defines Date as a string',
    type: 'string'
} as const;

export const ModelWithIntegerSchema = {
    description: 'This is a model with one number property',
    type: 'object',
    properties: {
        prop: {
            description: 'This is a simple number property',
            type: 'integer'
        }
    }
} as const;

export const ModelWithBooleanSchema = {
    description: 'This is a model with one boolean property',
    type: 'object',
    properties: {
        prop: {
            description: 'This is a simple boolean property',
            type: 'boolean'
        }
    }
} as const;

export const ModelWithStringSchema = {
    description: 'This is a model with one string property',
    type: 'object',
    properties: {
        prop: {
            description: 'This is a simple string property',
            type: 'string'
        }
    }
} as const;

export const ModelWithStringErrorSchema = {
    description: 'This is a model with one string property',
    type: 'object',
    properties: {
        prop: {
            description: 'This is a simple string property',
            type: 'string'
        }
    }
} as const;

export const ModelWithNullableStringSchema = {
    description: 'This is a model with one string property',
    type: 'object',
    required: ['nullableRequiredProp'],
    properties: {
        nullableProp: {
            description: 'This is a simple string property',
            type: 'string',
            'x-nullable': true
        },
        nullableRequiredProp: {
            description: 'This is a simple string property',
            type: 'string',
            'x-nullable': true
        }
    }
} as const;

export const ModelWithEnumSchema = {
    description: 'This is a model with one enum',
    type: 'object',
    properties: {
        test: {
            description: 'This is a simple enum with strings',
            enum: ['Success', 'Warning', 'Error', 'ØÆÅ字符串']
        },
        statusCode: {
            description: 'These are the HTTP error code enums',
            enum: ['100', '200 FOO', '300 FOO_BAR', '400 foo-bar', '500 foo.bar', '600 foo&bar']
        },
        bool: {
            description: 'Simple boolean enum',
            type: 'boolean',
            enum: [true]
        }
    }
} as const;

export const ModelWithEnumFromDescriptionSchema = {
    description: 'This is a model with one enum',
    type: 'object',
    properties: {
        test: {
            type: 'integer',
            description: 'Success=1,Warning=2,Error=3'
        }
    }
} as const;

export const ModelWithNestedEnumsSchema = {
    description: 'This is a model with nested enums',
    type: 'object',
    properties: {
        dictionaryWithEnum: {
            type: 'object',
            additionalProperties: {
                enum: ['Success', 'Warning', 'Error']
            }
        },
        dictionaryWithEnumFromDescription: {
            type: 'object',
            additionalProperties: {
                type: 'integer',
                description: 'Success=1,Warning=2,Error=3'
            }
        },
        arrayWithEnum: {
            type: 'array',
            items: {
                enum: ['Success', 'Warning', 'Error']
            }
        },
        arrayWithDescription: {
            type: 'array',
            items: {
                type: 'integer',
                description: 'Success=1,Warning=2,Error=3'
            }
        }
    }
} as const;

export const ModelWithReferenceSchema = {
    description: 'This is a model with one property containing a reference',
    type: 'object',
    properties: {
        prop: {
            '$ref': '#/definitions/ModelWithProperties'
        }
    }
} as const;

export const ModelWithArraySchema = {
    description: 'This is a model with one property containing an array',
    type: 'object',
    properties: {
        prop: {
            type: 'array',
            items: {
                '$ref': '#/definitions/ModelWithString'
            }
        },
        propWithFile: {
            type: 'array',
            items: {
                format: 'binary',
                type: 'string'
            }
        },
        propWithNumber: {
            type: 'array',
            items: {
                type: 'number'
            }
        }
    }
} as const;

export const ModelWithDictionarySchema = {
    description: 'This is a model with one property containing a dictionary',
    type: 'object',
    properties: {
        prop: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        }
    }
} as const;

export const ModelWithCircularReferenceSchema = {
    description: 'This is a model with one property containing a circular reference',
    type: 'object',
    properties: {
        prop: {
            '$ref': '#/definitions/ModelWithCircularReference'
        }
    }
} as const;

export const ModelWithPropertiesSchema = {
    description: 'This is a model with one nested property',
    type: 'object',
    required: ['required', 'requiredAndReadOnly'],
    properties: {
        required: {
            type: 'string'
        },
        requiredAndReadOnly: {
            type: 'string',
            readOnly: true
        },
        string: {
            type: 'string'
        },
        number: {
            type: 'number'
        },
        boolean: {
            type: 'boolean'
        },
        reference: {
            '$ref': '#/definitions/ModelWithString'
        },
        'property with space': {
            type: 'string'
        },
        default: {
            type: 'string'
        },
        try: {
            type: 'string'
        },
        '@namespace.string': {
            type: 'string',
            readOnly: true
        },
        '@namespace.integer': {
            type: 'integer',
            readOnly: true
        }
    }
} as const;

export const ModelWithNestedPropertiesSchema = {
    description: 'This is a model with one nested property',
    type: 'object',
    required: ['first'],
    properties: {
        first: {
            type: 'object',
            required: ['second'],
            readOnly: true,
            properties: {
                second: {
                    type: 'object',
                    required: ['third'],
                    readOnly: true,
                    properties: {
                        third: {
                            type: 'string',
                            readOnly: true
                        }
                    }
                }
            }
        }
    }
} as const;

export const ModelWithDuplicatePropertiesSchema = {
    description: 'This is a model with duplicated properties',
    type: 'object',
    properties: {
        prop: {
            '$ref': '#/definitions/ModelWithString'
        }
    }
} as const;

export const ModelWithOrderedPropertiesSchema = {
    description: 'This is a model with ordered properties',
    type: 'object',
    properties: {
        zebra: {
            type: 'string'
        },
        apple: {
            type: 'string'
        },
        hawaii: {
            type: 'string'
        }
    }
} as const;

export const ModelWithDuplicateImportsSchema = {
    description: 'This is a model with duplicated imports',
    type: 'object',
    properties: {
        propA: {
            '$ref': '#/definitions/ModelWithString'
        },
        propB: {
            '$ref': '#/definitions/ModelWithString'
        },
        propC: {
            '$ref': '#/definitions/ModelWithString'
        }
    }
} as const;

export const ModelThatExtendsSchema = {
    description: 'This is a model that extends another model',
    type: 'object',
    allOf: [
        {
            '$ref': '#/definitions/ModelWithString'
        },
        {
            type: 'object',
            properties: {
                propExtendsA: {
                    type: 'string'
                },
                propExtendsB: {
                    '$ref': '#/definitions/ModelWithString'
                }
            }
        }
    ]
} as const;

export const ModelThatExtendsExtendsSchema = {
    description: 'This is a model that extends another model',
    type: 'object',
    allOf: [
        {
            '$ref': '#/definitions/ModelWithString'
        },
        {
            '$ref': '#/definitions/ModelThatExtends'
        },
        {
            type: 'object',
            properties: {
                propExtendsC: {
                    type: 'string'
                },
                propExtendsD: {
                    '$ref': '#/definitions/ModelWithString'
                }
            }
        }
    ]
} as const;

export const defaultSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    }
} as const;

export const ModelWithPatternSchema = {
    description: 'This is a model that contains a some patterns',
    type: 'object',
    required: ['key', 'name'],
    properties: {
        key: {
            maxLength: 64,
            pattern: '^[a-zA-Z0-9_]*$',
            type: 'string'
        },
        name: {
            maxLength: 255,
            type: 'string'
        },
        enabled: {
            type: 'boolean',
            readOnly: true
        },
        modified: {
            type: 'string',
            format: 'date-time',
            readOnly: true
        },
        id: {
            type: 'string',
            pattern: '^\\d{2}-\\d{3}-\\d{4}$'
        },
        text: {
            type: 'string',
            pattern: '^\\w+$'
        },
        patternWithSingleQuotes: {
            type: 'string',
            pattern: "^[a-zA-Z0-9']*$"
        },
        patternWithNewline: {
            type: 'string',
            pattern: 'aaa\\nbbb'
        },
        patternWithBacktick: {
            type: 'string',
            pattern: 'aaa`bbb'
        }
    }
} as const;

export const parameter_ActivityParamsSchema = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        graduate_id: {
            type: 'integer'
        },
        organization_id: {
            type: 'integer'
        },
        parent_activity: {
            type: 'integer'
        },
        post_id: {
            type: 'integer'
        }
    }
} as const;

export const response_PostActivityResponseSchema = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        graduate_id: {
            type: 'integer'
        },
        organization_id: {
            type: 'integer'
        },
        parent_activity_id: {
            type: 'integer'
        },
        post_id: {
            type: 'integer'
        }
    }
} as const;

export const failure_FailureSchema = {
    type: 'object',
    properties: {
        error: {
            type: 'string'
        },
        message: {
            type: 'string'
        },
        reference_code: {
            type: 'string'
        }
    }
} as const;