import { applyDecorators, Type } from "@nestjs/common";
import { ApiOkResponse, ApiResponseOptions, getSchemaPath } from "@nestjs/swagger";


export const ApiListOkResponseDecorator = <T extends Type<any>>(
    model: T,
    options: ApiResponseOptions = {},
) => {
    return applyDecorators(
        ApiOkResponse({
            ...options,
            schema: {
                properties: {
                    data: {
                        type: 'array',
                        items: {
                            $ref: getSchemaPath(model),
                        }
                    }
                }
            }
        })
    )
}