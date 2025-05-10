/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model RecruitPost
 *
 */
export type RecruitPost = $Result.DefaultSelection<Prisma.$RecruitPostPayload>;
/**
 * Model Applicant
 *
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
    USER: "USER";
    ADMIN: "ADMIN";
    SUPER: "SUPER";
  };

  export type UserRole = (typeof UserRole)[keyof typeof UserRole];
}

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recruitPost`: Exposes CRUD operations for the **RecruitPost** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RecruitPosts
   * const recruitPosts = await prisma.recruitPost.findMany()
   * ```
   */
  get recruitPost(): Prisma.RecruitPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    RecruitPost: "RecruitPost";
    Applicant: "Applicant";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "user" | "recruitPost" | "applicant";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      RecruitPost: {
        payload: Prisma.$RecruitPostPayload<ExtArgs>;
        fields: Prisma.RecruitPostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RecruitPostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RecruitPostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          findFirst: {
            args: Prisma.RecruitPostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RecruitPostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          findMany: {
            args: Prisma.RecruitPostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>[];
          };
          create: {
            args: Prisma.RecruitPostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          createMany: {
            args: Prisma.RecruitPostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RecruitPostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>[];
          };
          delete: {
            args: Prisma.RecruitPostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          update: {
            args: Prisma.RecruitPostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          deleteMany: {
            args: Prisma.RecruitPostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RecruitPostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RecruitPostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>[];
          };
          upsert: {
            args: Prisma.RecruitPostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecruitPostPayload>;
          };
          aggregate: {
            args: Prisma.RecruitPostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecruitPost>;
          };
          groupBy: {
            args: Prisma.RecruitPostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecruitPostGroupByOutputType>[];
          };
          count: {
            args: Prisma.RecruitPostCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RecruitPostCountAggregateOutputType>
              | number;
          };
        };
      };
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>;
        fields: Prisma.ApplicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[];
          };
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ApplicantCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[];
          };
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ApplicantUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[];
          };
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplicant>;
          };
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    recruitPost?: RecruitPostOmit;
    applicant?: ApplicantOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RecruitPostCountOutputType
   */

  export type RecruitPostCountOutputType = {
    applicants: number;
  };

  export type RecruitPostCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    applicants?: boolean | RecruitPostCountOutputTypeCountApplicantsArgs;
  };

  // Custom InputTypes
  /**
   * RecruitPostCountOutputType without action
   */
  export type RecruitPostCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPostCountOutputType
     */
    select?: RecruitPostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RecruitPostCountOutputType without action
   */
  export type RecruitPostCountOutputTypeCountApplicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ApplicantWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    nickname: string | null;
    phoneNumber: string | null;
    profileImage: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    nickname: string | null;
    phoneNumber: string | null;
    profileImage: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    nickname: number;
    phoneNumber: number;
    profileImage: number;
    role: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    nickname?: true;
    phoneNumber?: true;
    profileImage?: true;
    role?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    nickname?: true;
    phoneNumber?: true;
    profileImage?: true;
    role?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    nickname?: true;
    phoneNumber?: true;
    profileImage?: true;
    role?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string | null;
    nickname: string;
    phoneNumber: string | null;
    profileImage: string | null;
    role: $Enums.UserRole;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      nickname?: boolean;
      phoneNumber?: boolean;
      profileImage?: boolean;
      role?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      nickname?: boolean;
      phoneNumber?: boolean;
      profileImage?: boolean;
      role?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      nickname?: boolean;
      phoneNumber?: boolean;
      profileImage?: boolean;
      role?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    nickname?: boolean;
    phoneNumber?: boolean;
    profileImage?: boolean;
    role?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "email"
    | "nickname"
    | "phoneNumber"
    | "profileImage"
    | "role"
    | "createdAt",
    ExtArgs["result"]["user"]
  >;

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "User";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string | null;
        nickname: string;
        phoneNumber: string | null;
        profileImage: string | null;
        role: $Enums.UserRole;
        createdAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly email: FieldRef<"User", "String">;
    readonly nickname: FieldRef<"User", "String">;
    readonly phoneNumber: FieldRef<"User", "String">;
    readonly profileImage: FieldRef<"User", "String">;
    readonly role: FieldRef<"User", "UserRole">;
    readonly createdAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
  };

  /**
   * Model RecruitPost
   */

  export type AggregateRecruitPost = {
    _count: RecruitPostCountAggregateOutputType | null;
    _avg: RecruitPostAvgAggregateOutputType | null;
    _sum: RecruitPostSumAggregateOutputType | null;
    _min: RecruitPostMinAggregateOutputType | null;
    _max: RecruitPostMaxAggregateOutputType | null;
  };

  export type RecruitPostAvgAggregateOutputType = {
    id: number | null;
  };

  export type RecruitPostSumAggregateOutputType = {
    id: number | null;
  };

  export type RecruitPostMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    thumbnailUrl: string | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
  };

  export type RecruitPostMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    thumbnailUrl: string | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
  };

  export type RecruitPostCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    thumbnailUrl: number;
    startDate: number;
    endDate: number;
    createdAt: number;
    _all: number;
  };

  export type RecruitPostAvgAggregateInputType = {
    id?: true;
  };

  export type RecruitPostSumAggregateInputType = {
    id?: true;
  };

  export type RecruitPostMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnailUrl?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
  };

  export type RecruitPostMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnailUrl?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
  };

  export type RecruitPostCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnailUrl?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    _all?: true;
  };

  export type RecruitPostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which RecruitPost to aggregate.
     */
    where?: RecruitPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitPosts to fetch.
     */
    orderBy?:
      | RecruitPostOrderByWithRelationInput
      | RecruitPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RecruitPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecruitPosts
     **/
    _count?: true | RecruitPostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecruitPostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecruitPostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecruitPostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecruitPostMaxAggregateInputType;
  };

  export type GetRecruitPostAggregateType<T extends RecruitPostAggregateArgs> =
    {
      [P in keyof T & keyof AggregateRecruitPost]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateRecruitPost[P]>
        : GetScalarType<T[P], AggregateRecruitPost[P]>;
    };

  export type RecruitPostGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: RecruitPostWhereInput;
    orderBy?:
      | RecruitPostOrderByWithAggregationInput
      | RecruitPostOrderByWithAggregationInput[];
    by: RecruitPostScalarFieldEnum[] | RecruitPostScalarFieldEnum;
    having?: RecruitPostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruitPostCountAggregateInputType | true;
    _avg?: RecruitPostAvgAggregateInputType;
    _sum?: RecruitPostSumAggregateInputType;
    _min?: RecruitPostMinAggregateInputType;
    _max?: RecruitPostMaxAggregateInputType;
  };

  export type RecruitPostGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string | null;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    _count: RecruitPostCountAggregateOutputType | null;
    _avg: RecruitPostAvgAggregateOutputType | null;
    _sum: RecruitPostSumAggregateOutputType | null;
    _min: RecruitPostMinAggregateOutputType | null;
    _max: RecruitPostMaxAggregateOutputType | null;
  };

  type GetRecruitPostGroupByPayload<T extends RecruitPostGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RecruitPostGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof RecruitPostGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecruitPostGroupByOutputType[P]>
            : GetScalarType<T[P], RecruitPostGroupByOutputType[P]>;
        }
      >
    >;

  export type RecruitPostSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnailUrl?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      createdAt?: boolean;
      applicants?: boolean | RecruitPost$applicantsArgs<ExtArgs>;
      _count?: boolean | RecruitPostCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["recruitPost"]
  >;

  export type RecruitPostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnailUrl?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["recruitPost"]
  >;

  export type RecruitPostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnailUrl?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["recruitPost"]
  >;

  export type RecruitPostSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    thumbnailUrl?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
  };

  export type RecruitPostOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "thumbnailUrl"
    | "startDate"
    | "endDate"
    | "createdAt",
    ExtArgs["result"]["recruitPost"]
  >;
  export type RecruitPostInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    applicants?: boolean | RecruitPost$applicantsArgs<ExtArgs>;
    _count?: boolean | RecruitPostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type RecruitPostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type RecruitPostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $RecruitPostPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "RecruitPost";
    objects: {
      applicants: Prisma.$ApplicantPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        description: string;
        thumbnailUrl: string | null;
        startDate: Date;
        endDate: Date;
        createdAt: Date;
      },
      ExtArgs["result"]["recruitPost"]
    >;
    composites: {};
  };

  type RecruitPostGetPayload<
    S extends boolean | null | undefined | RecruitPostDefaultArgs
  > = $Result.GetResult<Prisma.$RecruitPostPayload, S>;

  type RecruitPostCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    RecruitPostFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RecruitPostCountAggregateInputType | true;
  };

  export interface RecruitPostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["RecruitPost"];
      meta: { name: "RecruitPost" };
    };
    /**
     * Find zero or one RecruitPost that matches the filter.
     * @param {RecruitPostFindUniqueArgs} args - Arguments to find a RecruitPost
     * @example
     * // Get one RecruitPost
     * const recruitPost = await prisma.recruitPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruitPostFindUniqueArgs>(
      args: SelectSubset<T, RecruitPostFindUniqueArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RecruitPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruitPostFindUniqueOrThrowArgs} args - Arguments to find a RecruitPost
     * @example
     * // Get one RecruitPost
     * const recruitPost = await prisma.recruitPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruitPostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RecruitPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecruitPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostFindFirstArgs} args - Arguments to find a RecruitPost
     * @example
     * // Get one RecruitPost
     * const recruitPost = await prisma.recruitPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruitPostFindFirstArgs>(
      args?: SelectSubset<T, RecruitPostFindFirstArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecruitPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostFindFirstOrThrowArgs} args - Arguments to find a RecruitPost
     * @example
     * // Get one RecruitPost
     * const recruitPost = await prisma.recruitPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruitPostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecruitPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RecruitPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecruitPosts
     * const recruitPosts = await prisma.recruitPost.findMany()
     *
     * // Get first 10 RecruitPosts
     * const recruitPosts = await prisma.recruitPost.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recruitPostWithIdOnly = await prisma.recruitPost.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecruitPostFindManyArgs>(
      args?: SelectSubset<T, RecruitPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RecruitPost.
     * @param {RecruitPostCreateArgs} args - Arguments to create a RecruitPost.
     * @example
     * // Create one RecruitPost
     * const RecruitPost = await prisma.recruitPost.create({
     *   data: {
     *     // ... data to create a RecruitPost
     *   }
     * })
     *
     */
    create<T extends RecruitPostCreateArgs>(
      args: SelectSubset<T, RecruitPostCreateArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RecruitPosts.
     * @param {RecruitPostCreateManyArgs} args - Arguments to create many RecruitPosts.
     * @example
     * // Create many RecruitPosts
     * const recruitPost = await prisma.recruitPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecruitPostCreateManyArgs>(
      args?: SelectSubset<T, RecruitPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RecruitPosts and returns the data saved in the database.
     * @param {RecruitPostCreateManyAndReturnArgs} args - Arguments to create many RecruitPosts.
     * @example
     * // Create many RecruitPosts
     * const recruitPost = await prisma.recruitPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RecruitPosts and only return the `id`
     * const recruitPostWithIdOnly = await prisma.recruitPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecruitPostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RecruitPostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RecruitPost.
     * @param {RecruitPostDeleteArgs} args - Arguments to delete one RecruitPost.
     * @example
     * // Delete one RecruitPost
     * const RecruitPost = await prisma.recruitPost.delete({
     *   where: {
     *     // ... filter to delete one RecruitPost
     *   }
     * })
     *
     */
    delete<T extends RecruitPostDeleteArgs>(
      args: SelectSubset<T, RecruitPostDeleteArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RecruitPost.
     * @param {RecruitPostUpdateArgs} args - Arguments to update one RecruitPost.
     * @example
     * // Update one RecruitPost
     * const recruitPost = await prisma.recruitPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecruitPostUpdateArgs>(
      args: SelectSubset<T, RecruitPostUpdateArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RecruitPosts.
     * @param {RecruitPostDeleteManyArgs} args - Arguments to filter RecruitPosts to delete.
     * @example
     * // Delete a few RecruitPosts
     * const { count } = await prisma.recruitPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecruitPostDeleteManyArgs>(
      args?: SelectSubset<T, RecruitPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RecruitPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecruitPosts
     * const recruitPost = await prisma.recruitPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecruitPostUpdateManyArgs>(
      args: SelectSubset<T, RecruitPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RecruitPosts and returns the data updated in the database.
     * @param {RecruitPostUpdateManyAndReturnArgs} args - Arguments to update many RecruitPosts.
     * @example
     * // Update many RecruitPosts
     * const recruitPost = await prisma.recruitPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RecruitPosts and only return the `id`
     * const recruitPostWithIdOnly = await prisma.recruitPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RecruitPostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RecruitPostUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RecruitPost.
     * @param {RecruitPostUpsertArgs} args - Arguments to update or create a RecruitPost.
     * @example
     * // Update or create a RecruitPost
     * const recruitPost = await prisma.recruitPost.upsert({
     *   create: {
     *     // ... data to create a RecruitPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecruitPost we want to update
     *   }
     * })
     */
    upsert<T extends RecruitPostUpsertArgs>(
      args: SelectSubset<T, RecruitPostUpsertArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      $Result.GetResult<
        Prisma.$RecruitPostPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RecruitPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostCountArgs} args - Arguments to filter RecruitPosts to count.
     * @example
     * // Count the number of RecruitPosts
     * const count = await prisma.recruitPost.count({
     *   where: {
     *     // ... the filter for the RecruitPosts we want to count
     *   }
     * })
     **/
    count<T extends RecruitPostCountArgs>(
      args?: Subset<T, RecruitPostCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RecruitPostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RecruitPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RecruitPostAggregateArgs>(
      args: Subset<T, RecruitPostAggregateArgs>
    ): Prisma.PrismaPromise<GetRecruitPostAggregateType<T>>;

    /**
     * Group by RecruitPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RecruitPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecruitPostGroupByArgs["orderBy"] }
        : { orderBy?: RecruitPostGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, RecruitPostGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetRecruitPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecruitPost model
     */
    readonly fields: RecruitPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecruitPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecruitPostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    applicants<T extends RecruitPost$applicantsArgs<ExtArgs> = {}>(
      args?: Subset<T, RecruitPost$applicantsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicantPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RecruitPost model
   */
  interface RecruitPostFieldRefs {
    readonly id: FieldRef<"RecruitPost", "Int">;
    readonly title: FieldRef<"RecruitPost", "String">;
    readonly description: FieldRef<"RecruitPost", "String">;
    readonly thumbnailUrl: FieldRef<"RecruitPost", "String">;
    readonly startDate: FieldRef<"RecruitPost", "DateTime">;
    readonly endDate: FieldRef<"RecruitPost", "DateTime">;
    readonly createdAt: FieldRef<"RecruitPost", "DateTime">;
  }

  // Custom InputTypes
  /**
   * RecruitPost findUnique
   */
  export type RecruitPostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitPost to fetch.
     */
    where: RecruitPostWhereUniqueInput;
  };

  /**
   * RecruitPost findUniqueOrThrow
   */
  export type RecruitPostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitPost to fetch.
     */
    where: RecruitPostWhereUniqueInput;
  };

  /**
   * RecruitPost findFirst
   */
  export type RecruitPostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitPost to fetch.
     */
    where?: RecruitPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitPosts to fetch.
     */
    orderBy?:
      | RecruitPostOrderByWithRelationInput
      | RecruitPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitPosts.
     */
    cursor?: RecruitPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitPosts.
     */
    distinct?: RecruitPostScalarFieldEnum | RecruitPostScalarFieldEnum[];
  };

  /**
   * RecruitPost findFirstOrThrow
   */
  export type RecruitPostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitPost to fetch.
     */
    where?: RecruitPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitPosts to fetch.
     */
    orderBy?:
      | RecruitPostOrderByWithRelationInput
      | RecruitPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitPosts.
     */
    cursor?: RecruitPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitPosts.
     */
    distinct?: RecruitPostScalarFieldEnum | RecruitPostScalarFieldEnum[];
  };

  /**
   * RecruitPost findMany
   */
  export type RecruitPostFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitPosts to fetch.
     */
    where?: RecruitPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitPosts to fetch.
     */
    orderBy?:
      | RecruitPostOrderByWithRelationInput
      | RecruitPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecruitPosts.
     */
    cursor?: RecruitPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitPosts.
     */
    skip?: number;
    distinct?: RecruitPostScalarFieldEnum | RecruitPostScalarFieldEnum[];
  };

  /**
   * RecruitPost create
   */
  export type RecruitPostCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * The data needed to create a RecruitPost.
     */
    data: XOR<RecruitPostCreateInput, RecruitPostUncheckedCreateInput>;
  };

  /**
   * RecruitPost createMany
   */
  export type RecruitPostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many RecruitPosts.
     */
    data: RecruitPostCreateManyInput | RecruitPostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RecruitPost createManyAndReturn
   */
  export type RecruitPostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * The data used to create many RecruitPosts.
     */
    data: RecruitPostCreateManyInput | RecruitPostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RecruitPost update
   */
  export type RecruitPostUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * The data needed to update a RecruitPost.
     */
    data: XOR<RecruitPostUpdateInput, RecruitPostUncheckedUpdateInput>;
    /**
     * Choose, which RecruitPost to update.
     */
    where: RecruitPostWhereUniqueInput;
  };

  /**
   * RecruitPost updateMany
   */
  export type RecruitPostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update RecruitPosts.
     */
    data: XOR<
      RecruitPostUpdateManyMutationInput,
      RecruitPostUncheckedUpdateManyInput
    >;
    /**
     * Filter which RecruitPosts to update
     */
    where?: RecruitPostWhereInput;
    /**
     * Limit how many RecruitPosts to update.
     */
    limit?: number;
  };

  /**
   * RecruitPost updateManyAndReturn
   */
  export type RecruitPostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * The data used to update RecruitPosts.
     */
    data: XOR<
      RecruitPostUpdateManyMutationInput,
      RecruitPostUncheckedUpdateManyInput
    >;
    /**
     * Filter which RecruitPosts to update
     */
    where?: RecruitPostWhereInput;
    /**
     * Limit how many RecruitPosts to update.
     */
    limit?: number;
  };

  /**
   * RecruitPost upsert
   */
  export type RecruitPostUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * The filter to search for the RecruitPost to update in case it exists.
     */
    where: RecruitPostWhereUniqueInput;
    /**
     * In case the RecruitPost found by the `where` argument doesn't exist, create a new RecruitPost with this data.
     */
    create: XOR<RecruitPostCreateInput, RecruitPostUncheckedCreateInput>;
    /**
     * In case the RecruitPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecruitPostUpdateInput, RecruitPostUncheckedUpdateInput>;
  };

  /**
   * RecruitPost delete
   */
  export type RecruitPostDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
    /**
     * Filter which RecruitPost to delete.
     */
    where: RecruitPostWhereUniqueInput;
  };

  /**
   * RecruitPost deleteMany
   */
  export type RecruitPostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which RecruitPosts to delete
     */
    where?: RecruitPostWhereInput;
    /**
     * Limit how many RecruitPosts to delete.
     */
    limit?: number;
  };

  /**
   * RecruitPost.applicants
   */
  export type RecruitPost$applicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    where?: ApplicantWhereInput;
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    cursor?: ApplicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * RecruitPost without action
   */
  export type RecruitPostDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RecruitPost
     */
    select?: RecruitPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitPost
     */
    omit?: RecruitPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitPostInclude<ExtArgs> | null;
  };

  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _avg: ApplicantAvgAggregateOutputType | null;
    _sum: ApplicantSumAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  export type ApplicantAvgAggregateOutputType = {
    id: number | null;
    recruitPostId: number | null;
  };

  export type ApplicantSumAggregateOutputType = {
    id: number | null;
    recruitPostId: number | null;
  };

  export type ApplicantMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    message: string | null;
    createdAt: Date | null;
    recruitPostId: number | null;
  };

  export type ApplicantMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    message: string | null;
    createdAt: Date | null;
    recruitPostId: number | null;
  };

  export type ApplicantCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    message: number;
    createdAt: number;
    recruitPostId: number;
    _all: number;
  };

  export type ApplicantAvgAggregateInputType = {
    id?: true;
    recruitPostId?: true;
  };

  export type ApplicantSumAggregateInputType = {
    id?: true;
    recruitPostId?: true;
  };

  export type ApplicantMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    message?: true;
    createdAt?: true;
    recruitPostId?: true;
  };

  export type ApplicantMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    message?: true;
    createdAt?: true;
    recruitPostId?: true;
  };

  export type ApplicantCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    message?: true;
    createdAt?: true;
    recruitPostId?: true;
    _all?: true;
  };

  export type ApplicantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applicants
     **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ApplicantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ApplicantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicantMaxAggregateInputType;
  };

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>;
  };

  export type ApplicantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ApplicantWhereInput;
    orderBy?:
      | ApplicantOrderByWithAggregationInput
      | ApplicantOrderByWithAggregationInput[];
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum;
    having?: ApplicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _avg?: ApplicantAvgAggregateInputType;
    _sum?: ApplicantSumAggregateInputType;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
  };

  export type ApplicantGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    message: string | null;
    createdAt: Date;
    recruitPostId: number;
    _count: ApplicantCountAggregateOutputType | null;
    _avg: ApplicantAvgAggregateOutputType | null;
    _sum: ApplicantSumAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApplicantGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ApplicantGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
        }
      >
    >;

  export type ApplicantSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      message?: boolean;
      createdAt?: boolean;
      recruitPostId?: boolean;
      recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["applicant"]
  >;

  export type ApplicantSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      message?: boolean;
      createdAt?: boolean;
      recruitPostId?: boolean;
      recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["applicant"]
  >;

  export type ApplicantSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      message?: boolean;
      createdAt?: boolean;
      recruitPostId?: boolean;
      recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["applicant"]
  >;

  export type ApplicantSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    message?: boolean;
    createdAt?: boolean;
    recruitPostId?: boolean;
  };

  export type ApplicantOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    "id" | "name" | "email" | "message" | "createdAt" | "recruitPostId",
    ExtArgs["result"]["applicant"]
  >;
  export type ApplicantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
  };
  export type ApplicantIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
  };
  export type ApplicantIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    recruitPost?: boolean | RecruitPostDefaultArgs<ExtArgs>;
  };

  export type $ApplicantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Applicant";
    objects: {
      recruitPost: Prisma.$RecruitPostPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        message: string | null;
        createdAt: Date;
        recruitPostId: number;
      },
      ExtArgs["result"]["applicant"]
    >;
    composites: {};
  };

  type ApplicantGetPayload<
    S extends boolean | null | undefined | ApplicantDefaultArgs
  > = $Result.GetResult<Prisma.$ApplicantPayload, S>;

  type ApplicantCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    ApplicantFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ApplicantCountAggregateInputType | true;
  };

  export interface ApplicantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Applicant"];
      meta: { name: "Applicant" };
    };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(
      args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(
      args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicantFindManyArgs>(
      args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     */
    create<T extends ApplicantCreateArgs>(
      args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicantCreateManyArgs>(
      args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     */
    delete<T extends ApplicantDeleteArgs>(
      args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicantUpdateArgs>(
      args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(
      args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicantUpdateManyArgs>(
      args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApplicantUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ApplicantUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(
      args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
     **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ApplicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicantAggregateArgs>(
      args: Subset<T, ApplicantAggregateArgs>
    ): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs["orderBy"] }
        : { orderBy?: ApplicantGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetApplicantGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Applicant model
     */
    readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recruitPost<T extends RecruitPostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RecruitPostDefaultArgs<ExtArgs>>
    ): Prisma__RecruitPostClient<
      | $Result.GetResult<
          Prisma.$RecruitPostPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<"Applicant", "Int">;
    readonly name: FieldRef<"Applicant", "String">;
    readonly email: FieldRef<"Applicant", "String">;
    readonly message: FieldRef<"Applicant", "String">;
    readonly createdAt: FieldRef<"Applicant", "DateTime">;
    readonly recruitPostId: FieldRef<"Applicant", "Int">;
  }

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>;
  };

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Applicant createManyAndReturn
   */
  export type ApplicantCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>;
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput;
    /**
     * Limit how many Applicants to update.
     */
    limit?: number;
  };

  /**
   * Applicant updateManyAndReturn
   */
  export type ApplicantUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * The data used to update Applicants.
     */
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput;
    /**
     * Limit how many Applicants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput;
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>;
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>;
  };

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput;
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number;
  };

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    nickname: "nickname";
    phoneNumber: "phoneNumber";
    profileImage: "profileImage";
    role: "role";
    createdAt: "createdAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const RecruitPostScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    thumbnailUrl: "thumbnailUrl";
    startDate: "startDate";
    endDate: "endDate";
    createdAt: "createdAt";
  };

  export type RecruitPostScalarFieldEnum =
    (typeof RecruitPostScalarFieldEnum)[keyof typeof RecruitPostScalarFieldEnum];

  export const ApplicantScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    message: "message";
    createdAt: "createdAt";
    recruitPostId: "recruitPostId";
  };

  export type ApplicantScalarFieldEnum =
    (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "UserRole"
  >;

  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "UserRole[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    email?: StringNullableFilter<"User"> | string | null;
    nickname?: StringFilter<"User"> | string;
    phoneNumber?: StringNullableFilter<"User"> | string | null;
    profileImage?: StringNullableFilter<"User"> | string | null;
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: DateTimeFilter<"User"> | Date | string;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrderInput | SortOrder;
    nickname?: SortOrder;
    phoneNumber?: SortOrderInput | SortOrder;
    profileImage?: SortOrderInput | SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      nickname?: string;
      phoneNumber?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      profileImage?: StringNullableFilter<"User"> | string | null;
      role?: EnumUserRoleFilter<"User"> | $Enums.UserRole;
      createdAt?: DateTimeFilter<"User"> | Date | string;
    },
    "id" | "email" | "nickname" | "phoneNumber"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrderInput | SortOrder;
    nickname?: SortOrder;
    phoneNumber?: SortOrderInput | SortOrder;
    profileImage?: SortOrderInput | SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    email?: StringNullableWithAggregatesFilter<"User"> | string | null;
    nickname?: StringWithAggregatesFilter<"User"> | string;
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null;
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type RecruitPostWhereInput = {
    AND?: RecruitPostWhereInput | RecruitPostWhereInput[];
    OR?: RecruitPostWhereInput[];
    NOT?: RecruitPostWhereInput | RecruitPostWhereInput[];
    id?: IntFilter<"RecruitPost"> | number;
    title?: StringFilter<"RecruitPost"> | string;
    description?: StringFilter<"RecruitPost"> | string;
    thumbnailUrl?: StringNullableFilter<"RecruitPost"> | string | null;
    startDate?: DateTimeFilter<"RecruitPost"> | Date | string;
    endDate?: DateTimeFilter<"RecruitPost"> | Date | string;
    createdAt?: DateTimeFilter<"RecruitPost"> | Date | string;
    applicants?: ApplicantListRelationFilter;
  };

  export type RecruitPostOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnailUrl?: SortOrderInput | SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    createdAt?: SortOrder;
    applicants?: ApplicantOrderByRelationAggregateInput;
  };

  export type RecruitPostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: RecruitPostWhereInput | RecruitPostWhereInput[];
      OR?: RecruitPostWhereInput[];
      NOT?: RecruitPostWhereInput | RecruitPostWhereInput[];
      title?: StringFilter<"RecruitPost"> | string;
      description?: StringFilter<"RecruitPost"> | string;
      thumbnailUrl?: StringNullableFilter<"RecruitPost"> | string | null;
      startDate?: DateTimeFilter<"RecruitPost"> | Date | string;
      endDate?: DateTimeFilter<"RecruitPost"> | Date | string;
      createdAt?: DateTimeFilter<"RecruitPost"> | Date | string;
      applicants?: ApplicantListRelationFilter;
    },
    "id"
  >;

  export type RecruitPostOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnailUrl?: SortOrderInput | SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    createdAt?: SortOrder;
    _count?: RecruitPostCountOrderByAggregateInput;
    _avg?: RecruitPostAvgOrderByAggregateInput;
    _max?: RecruitPostMaxOrderByAggregateInput;
    _min?: RecruitPostMinOrderByAggregateInput;
    _sum?: RecruitPostSumOrderByAggregateInput;
  };

  export type RecruitPostScalarWhereWithAggregatesInput = {
    AND?:
      | RecruitPostScalarWhereWithAggregatesInput
      | RecruitPostScalarWhereWithAggregatesInput[];
    OR?: RecruitPostScalarWhereWithAggregatesInput[];
    NOT?:
      | RecruitPostScalarWhereWithAggregatesInput
      | RecruitPostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"RecruitPost"> | number;
    title?: StringWithAggregatesFilter<"RecruitPost"> | string;
    description?: StringWithAggregatesFilter<"RecruitPost"> | string;
    thumbnailUrl?:
      | StringNullableWithAggregatesFilter<"RecruitPost">
      | string
      | null;
    startDate?: DateTimeWithAggregatesFilter<"RecruitPost"> | Date | string;
    endDate?: DateTimeWithAggregatesFilter<"RecruitPost"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"RecruitPost"> | Date | string;
  };

  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[];
    OR?: ApplicantWhereInput[];
    NOT?: ApplicantWhereInput | ApplicantWhereInput[];
    id?: IntFilter<"Applicant"> | number;
    name?: StringFilter<"Applicant"> | string;
    email?: StringFilter<"Applicant"> | string;
    message?: StringNullableFilter<"Applicant"> | string | null;
    createdAt?: DateTimeFilter<"Applicant"> | Date | string;
    recruitPostId?: IntFilter<"Applicant"> | number;
    recruitPost?: XOR<RecruitPostScalarRelationFilter, RecruitPostWhereInput>;
  };

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    message?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    recruitPostId?: SortOrder;
    recruitPost?: RecruitPostOrderByWithRelationInput;
  };

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ApplicantWhereInput | ApplicantWhereInput[];
      OR?: ApplicantWhereInput[];
      NOT?: ApplicantWhereInput | ApplicantWhereInput[];
      name?: StringFilter<"Applicant"> | string;
      email?: StringFilter<"Applicant"> | string;
      message?: StringNullableFilter<"Applicant"> | string | null;
      createdAt?: DateTimeFilter<"Applicant"> | Date | string;
      recruitPostId?: IntFilter<"Applicant"> | number;
      recruitPost?: XOR<RecruitPostScalarRelationFilter, RecruitPostWhereInput>;
    },
    "id"
  >;

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    message?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    recruitPostId?: SortOrder;
    _count?: ApplicantCountOrderByAggregateInput;
    _avg?: ApplicantAvgOrderByAggregateInput;
    _max?: ApplicantMaxOrderByAggregateInput;
    _min?: ApplicantMinOrderByAggregateInput;
    _sum?: ApplicantSumOrderByAggregateInput;
  };

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?:
      | ApplicantScalarWhereWithAggregatesInput
      | ApplicantScalarWhereWithAggregatesInput[];
    OR?: ApplicantScalarWhereWithAggregatesInput[];
    NOT?:
      | ApplicantScalarWhereWithAggregatesInput
      | ApplicantScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Applicant"> | number;
    name?: StringWithAggregatesFilter<"Applicant"> | string;
    email?: StringWithAggregatesFilter<"Applicant"> | string;
    message?: StringNullableWithAggregatesFilter<"Applicant"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string;
    recruitPostId?: IntWithAggregatesFilter<"Applicant"> | number;
  };

  export type UserCreateInput = {
    email?: string | null;
    nickname: string;
    phoneNumber?: string | null;
    profileImage?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email?: string | null;
    nickname: string;
    phoneNumber?: string | null;
    profileImage?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
  };

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateManyInput = {
    id?: number;
    email?: string | null;
    nickname: string;
    phoneNumber?: string | null;
    profileImage?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecruitPostCreateInput = {
    title: string;
    description: string;
    thumbnailUrl?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    applicants?: ApplicantCreateNestedManyWithoutRecruitPostInput;
  };

  export type RecruitPostUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    thumbnailUrl?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutRecruitPostInput;
  };

  export type RecruitPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUpdateManyWithoutRecruitPostNestedInput;
  };

  export type RecruitPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutRecruitPostNestedInput;
  };

  export type RecruitPostCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    thumbnailUrl?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
  };

  export type RecruitPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecruitPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantCreateInput = {
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
    recruitPost: RecruitPostCreateNestedOneWithoutApplicantsInput;
  };

  export type ApplicantUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
    recruitPostId: number;
  };

  export type ApplicantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruitPost?: RecruitPostUpdateOneRequiredWithoutApplicantsNestedInput;
  };

  export type ApplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruitPostId?: IntFieldUpdateOperationsInput | number;
  };

  export type ApplicantCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
    recruitPostId: number;
  };

  export type ApplicantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    recruitPostId?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    nickname?: SortOrder;
    phoneNumber?: SortOrder;
    profileImage?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    nickname?: SortOrder;
    phoneNumber?: SortOrder;
    profileImage?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    nickname?: SortOrder;
    phoneNumber?: SortOrder;
    profileImage?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ApplicantListRelationFilter = {
    every?: ApplicantWhereInput;
    some?: ApplicantWhereInput;
    none?: ApplicantWhereInput;
  };

  export type ApplicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RecruitPostCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnailUrl?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RecruitPostAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type RecruitPostMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnailUrl?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RecruitPostMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnailUrl?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RecruitPostSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type RecruitPostScalarRelationFilter = {
    is?: RecruitPostWhereInput;
    isNot?: RecruitPostWhereInput;
  };

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
    recruitPostId?: SortOrder;
  };

  export type ApplicantAvgOrderByAggregateInput = {
    id?: SortOrder;
    recruitPostId?: SortOrder;
  };

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
    recruitPostId?: SortOrder;
  };

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
    recruitPostId?: SortOrder;
  };

  export type ApplicantSumOrderByAggregateInput = {
    id?: SortOrder;
    recruitPostId?: SortOrder;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ApplicantCreateNestedManyWithoutRecruitPostInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutRecruitPostInput,
          ApplicantUncheckedCreateWithoutRecruitPostInput
        >
      | ApplicantCreateWithoutRecruitPostInput[]
      | ApplicantUncheckedCreateWithoutRecruitPostInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutRecruitPostInput
      | ApplicantCreateOrConnectWithoutRecruitPostInput[];
    createMany?: ApplicantCreateManyRecruitPostInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type ApplicantUncheckedCreateNestedManyWithoutRecruitPostInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutRecruitPostInput,
          ApplicantUncheckedCreateWithoutRecruitPostInput
        >
      | ApplicantCreateWithoutRecruitPostInput[]
      | ApplicantUncheckedCreateWithoutRecruitPostInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutRecruitPostInput
      | ApplicantCreateOrConnectWithoutRecruitPostInput[];
    createMany?: ApplicantCreateManyRecruitPostInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type ApplicantUpdateManyWithoutRecruitPostNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutRecruitPostInput,
          ApplicantUncheckedCreateWithoutRecruitPostInput
        >
      | ApplicantCreateWithoutRecruitPostInput[]
      | ApplicantUncheckedCreateWithoutRecruitPostInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutRecruitPostInput
      | ApplicantCreateOrConnectWithoutRecruitPostInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutRecruitPostInput
      | ApplicantUpsertWithWhereUniqueWithoutRecruitPostInput[];
    createMany?: ApplicantCreateManyRecruitPostInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutRecruitPostInput
      | ApplicantUpdateWithWhereUniqueWithoutRecruitPostInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutRecruitPostInput
      | ApplicantUpdateManyWithWhereWithoutRecruitPostInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type ApplicantUncheckedUpdateManyWithoutRecruitPostNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutRecruitPostInput,
          ApplicantUncheckedCreateWithoutRecruitPostInput
        >
      | ApplicantCreateWithoutRecruitPostInput[]
      | ApplicantUncheckedCreateWithoutRecruitPostInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutRecruitPostInput
      | ApplicantCreateOrConnectWithoutRecruitPostInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutRecruitPostInput
      | ApplicantUpsertWithWhereUniqueWithoutRecruitPostInput[];
    createMany?: ApplicantCreateManyRecruitPostInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutRecruitPostInput
      | ApplicantUpdateWithWhereUniqueWithoutRecruitPostInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutRecruitPostInput
      | ApplicantUpdateManyWithWhereWithoutRecruitPostInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type RecruitPostCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<
      RecruitPostCreateWithoutApplicantsInput,
      RecruitPostUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: RecruitPostCreateOrConnectWithoutApplicantsInput;
    connect?: RecruitPostWhereUniqueInput;
  };

  export type RecruitPostUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<
      RecruitPostCreateWithoutApplicantsInput,
      RecruitPostUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: RecruitPostCreateOrConnectWithoutApplicantsInput;
    upsert?: RecruitPostUpsertWithoutApplicantsInput;
    connect?: RecruitPostWhereUniqueInput;
    update?: XOR<
      XOR<
        RecruitPostUpdateToOneWithWhereWithoutApplicantsInput,
        RecruitPostUpdateWithoutApplicantsInput
      >,
      RecruitPostUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ApplicantCreateWithoutRecruitPostInput = {
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
  };

  export type ApplicantUncheckedCreateWithoutRecruitPostInput = {
    id?: number;
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
  };

  export type ApplicantCreateOrConnectWithoutRecruitPostInput = {
    where: ApplicantWhereUniqueInput;
    create: XOR<
      ApplicantCreateWithoutRecruitPostInput,
      ApplicantUncheckedCreateWithoutRecruitPostInput
    >;
  };

  export type ApplicantCreateManyRecruitPostInputEnvelope = {
    data:
      | ApplicantCreateManyRecruitPostInput
      | ApplicantCreateManyRecruitPostInput[];
    skipDuplicates?: boolean;
  };

  export type ApplicantUpsertWithWhereUniqueWithoutRecruitPostInput = {
    where: ApplicantWhereUniqueInput;
    update: XOR<
      ApplicantUpdateWithoutRecruitPostInput,
      ApplicantUncheckedUpdateWithoutRecruitPostInput
    >;
    create: XOR<
      ApplicantCreateWithoutRecruitPostInput,
      ApplicantUncheckedCreateWithoutRecruitPostInput
    >;
  };

  export type ApplicantUpdateWithWhereUniqueWithoutRecruitPostInput = {
    where: ApplicantWhereUniqueInput;
    data: XOR<
      ApplicantUpdateWithoutRecruitPostInput,
      ApplicantUncheckedUpdateWithoutRecruitPostInput
    >;
  };

  export type ApplicantUpdateManyWithWhereWithoutRecruitPostInput = {
    where: ApplicantScalarWhereInput;
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyWithoutRecruitPostInput
    >;
  };

  export type ApplicantScalarWhereInput = {
    AND?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
    OR?: ApplicantScalarWhereInput[];
    NOT?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
    id?: IntFilter<"Applicant"> | number;
    name?: StringFilter<"Applicant"> | string;
    email?: StringFilter<"Applicant"> | string;
    message?: StringNullableFilter<"Applicant"> | string | null;
    createdAt?: DateTimeFilter<"Applicant"> | Date | string;
    recruitPostId?: IntFilter<"Applicant"> | number;
  };

  export type RecruitPostCreateWithoutApplicantsInput = {
    title: string;
    description: string;
    thumbnailUrl?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
  };

  export type RecruitPostUncheckedCreateWithoutApplicantsInput = {
    id?: number;
    title: string;
    description: string;
    thumbnailUrl?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
  };

  export type RecruitPostCreateOrConnectWithoutApplicantsInput = {
    where: RecruitPostWhereUniqueInput;
    create: XOR<
      RecruitPostCreateWithoutApplicantsInput,
      RecruitPostUncheckedCreateWithoutApplicantsInput
    >;
  };

  export type RecruitPostUpsertWithoutApplicantsInput = {
    update: XOR<
      RecruitPostUpdateWithoutApplicantsInput,
      RecruitPostUncheckedUpdateWithoutApplicantsInput
    >;
    create: XOR<
      RecruitPostCreateWithoutApplicantsInput,
      RecruitPostUncheckedCreateWithoutApplicantsInput
    >;
    where?: RecruitPostWhereInput;
  };

  export type RecruitPostUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: RecruitPostWhereInput;
    data: XOR<
      RecruitPostUpdateWithoutApplicantsInput,
      RecruitPostUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type RecruitPostUpdateWithoutApplicantsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecruitPostUncheckedUpdateWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantCreateManyRecruitPostInput = {
    id?: number;
    name: string;
    email: string;
    message?: string | null;
    createdAt?: Date | string;
  };

  export type ApplicantUpdateWithoutRecruitPostInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantUncheckedUpdateWithoutRecruitPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantUncheckedUpdateManyWithoutRecruitPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
