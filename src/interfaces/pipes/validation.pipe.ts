import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

type SimplifiedValidationError = {
    property: string;
    constraints?: { [type: string]: string };
};

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    static organizeErrors(errors: ValidationError[]): SimplifiedValidationError[] {
        return errors.map(({ property, constraints }) => ({
            property,
            constraints
        }));
    }

    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToInstance(metatype, value);

        const errors = await validate(object);

        if (errors.length > 0) {
            throw new BadRequestException(ValidationPipe.organizeErrors(errors));
        }

        return value;
    }


    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
